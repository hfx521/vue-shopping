import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools' // 导入 VueDevTools 插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 1.配置elemnetPlus采用sass样式配色系统
      resolvers: [ElementPlusResolver({ importStyle: "sass" }),
    ],
    }),
    // 仅在开发环境下启用 Vue DevTools
    process.env.NODE_ENV === 'development' && VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 2. 自动导入定制化样式文件进行样式覆盖
        additionalData:`
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
      `,
      }
    }
  }
})
