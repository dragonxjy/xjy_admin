import { defineConfig, loadEnv } from "vite"
import { fileURLToPath, URL } from "node:url"
import UnoCSS from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"
import vue from "@vitejs/plugin-vue"
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 开发代理与请求使用同一个环境前缀，切换前缀无需修改 rewrite。
  const env = loadEnv(mode, process.cwd())
  const apiPrefix = env.VITE_BASE_URL || "/api"
  return {
    base: "./",
    plugins: [
      // ...
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "./src/types/auto-imports.d.ts",
        eslintrc: {
          enabled: true,
          // 指定文件存放目录
          filepath: "./.config/eslint-auto-import.json", // 自定义路径
        },
        vueTemplate: true, // default false
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      }),
      vue(),
      UnoCSS(),
      // 组件自动导入及按需样式。
      Components({
        resolvers: [
          ElementPlusResolver({ importStyle: "sass" }),
          // 富文本组件及样式只在使用它们的页面加载。
          (name) => {
            if (name === "Editor" || name === "Toolbar") {
              return {
                name,
                from: "@wangeditor/editor-for-vue",
                sideEffects: "@wangeditor/editor/dist/css/style.css",
              }
            }
          },
        ],
        // 按目录查找业务组件并自动导入，无需在 main.ts 中注册。
        dirs: ["src/components/", "src/**/components"],
        // 生成components.d.ts
        dts: "./src/types/components.d.ts",
        deep: true,
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/svgs")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    optimizeDeps: {
      // 仅预构建下方指定的 ESM 入口，其余组件样式入口由 Vite 直接处理。
      exclude: ["element-plus"],
      // 自动导入发生在扫描之后，提前预构建可避免首次切页触发依赖重建和刷新。
      include: [
        "element-plus/es",
        "@element-plus/icons-vue",
        "@wangeditor/editor",
        "@wangeditor/editor-for-vue",
        "echarts/core",
        "echarts/charts",
        "echarts/components",
        "echarts/renderers",
      ],
    },
    //主题定制(主题覆盖)
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          // 自动导入定制化样式文件进行样式覆盖
          additionalData: `@use "@/styles/element/index.scss" as *;\n@use "@/config/public.scss" as *;\n`,
        },
      },
    },
    //配置代理跨域
    server: {
      port: 9000, //自定义端口
      proxy: {
        [apiPrefix]: {
          target: env.VITE_URL,
          changeOrigin: true,
          rewrite: (path) => path.slice(apiPrefix.length),
        },
      },
    },
  }
})
