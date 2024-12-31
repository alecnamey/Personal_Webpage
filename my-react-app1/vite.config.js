import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //base: '/Personal_Webpage/',
  
  plugins: [react()],
  build: {
    outDir: 'root',  // Change build output directory to 'docs'
  },
})
