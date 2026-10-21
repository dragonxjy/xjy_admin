import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { gzipSync } from "node:zlib"

// 默认统计 dist，也可传入另一份构建目录；--json 输出完整字节数。
const args = process.argv.slice(2)
const directory = path.resolve(
  args.find((arg) => !arg.startsWith("--")) || "dist",
)

async function collectFiles(folder) {
  const entries = await readdir(folder, { withFileTypes: true })
  const groups = await Promise.all(
    entries.map(async (entry) => {
      const filename = path.join(folder, entry.name)
      if (entry.isDirectory()) return collectFiles(filename)
      if (!entry.isFile()) return []
      const data = await readFile(filename)
      return [
        {
          file: path.relative(directory, filename),
          ext: path.extname(filename),
          bytes: data.length,
          gzip: gzipSync(data, { level: 6 }).length,
        },
      ]
    }),
  )
  return groups.flat().sort((a, b) => a.file.localeCompare(b.file))
}

try {
  const files = await collectFiles(directory)
  const categories = {
    js: [".js"],
    css: [".css"],
    code: [".js", ".css"],
    images: [".png", ".svg", ".webp", ".jpg", ".jpeg", ".gif", ".ico"],
    dist: null,
  }
  const metrics = Object.fromEntries(
    Object.entries(categories).map(([name, extensions]) => {
      const selected = files.filter(
        (file) => !extensions || extensions.includes(file.ext),
      )
      return [
        name,
        {
          files: selected.length,
          bytes: selected.reduce((total, file) => total + file.bytes, 0),
          gzip: selected.reduce((total, file) => total + file.gzip, 0),
        },
      ]
    }),
  )
  if (args.includes("--json")) {
    console.log(JSON.stringify({ directory, metrics, files }, null, 2))
  } else {
    console.log(`构建目录：${directory}（1 kB = 1,000 字节；gzip level 6）`)
    console.table(
      Object.fromEntries(
        Object.entries(metrics).map(([name, metric]) => [
          name,
          {
            文件数: metric.files,
            "原始体积 (kB)": (metric.bytes / 1000).toFixed(2),
            "gzip 参考体积 (kB)": (metric.gzip / 1000).toFixed(2),
          },
        ]),
      ),
    )
  }
} catch (error) {
  console.error(`无法统计构建目录：${directory}。请先执行 pnpm build。`)
  console.error(error.message)
  process.exitCode = 1
}
