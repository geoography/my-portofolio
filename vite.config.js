import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-portofolio/',
  plugins: [tailwindcss()],
})