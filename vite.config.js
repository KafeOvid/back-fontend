import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src',  // Ensure this is pointing to where index.html is located
  build: {
    outDir: '../static',  // Ensure this is the directory where you want to output build files
    emptyOutDir: true,  // Ensure the outDir will be emptied before building
  }
})
