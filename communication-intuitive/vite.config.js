
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',
      extensions: ['vue', 'html'],
    }),
    Sitemap({
      hostname: 'https://votre-domaine.com',
      outDir: 'public',
    })
  ],
  server: {
    historyApiFallback: true
  }
})
