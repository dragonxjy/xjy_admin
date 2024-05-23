import { defineConfig, loadEnv } from "vite"
import { fileURLToPath, URL } from "node:url"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import path from "path"
import { viteMockServe } from "vite-plugin-mock"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //拿到配置的环境变量
  const env = loadEnv(mode, process.cwd())
  return {
    server: {
      port: 9000, //自定义端口
    },
    plugins: [
      vue(),
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      //movk
      viteMockServe({
        mockPath: "./src/mock",
        //@ts-ignore
        localEnabled: true,
      }),
      // 主题定制
      Components({
        resolvers: [ElementPlusResolver({ importStyle: "sass" })],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/svgs/config")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    //主题定制(主题覆盖)
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          // 自动导入定制化样式文件进行样式覆盖
          additionalData: `  
          @use "@/config/public.scss" as *;
          `,
        },
      },
    },
    //配置代理跨域
    // server: {
    //   proxy: {
    //     [env.VITE_BASE_URL]: {
    //       target: env.VITE_URL,
    //       changeOrigin: true,
    //       rewrite: (path) => path.replace(/^\/api/, ''),
    //     },

    //   }
    // }
  }
})
