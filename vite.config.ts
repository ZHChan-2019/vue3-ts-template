import { fileURLToPath, URL } from 'url'
// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入svg依赖插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({ command }) => {
  return {
    server: {
      proxy: {
        '/api': {
          target: 'http://43.139.226.94',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      // viteMockServe({
      //   localEnabled: command === 'serve',//保证开发阶段使用mock
      // }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    //scss全局变量的配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  }
}
