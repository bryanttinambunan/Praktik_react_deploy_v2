
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'github-pages'
    ? '/Praktik_react_deploy_v2/'
    : '/',
}))
