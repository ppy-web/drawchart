import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: true, // 确保为 true
  },
  plugins: [vue()],
  resolve: {
    // alias: {
    //   'vue3-roughviz': 'vue3-roughviz/dist/index.js'
    // }
  }
})