import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from  'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../../out/web/toolbox/dist',
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 5000000,
    assetsInlineLimit: 20 * 1024,
    rollupOptions: {
      output: {
        manualChunks(){ return null;}
      }
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss, 
        autoprefixer,
      ]
    }
  }
})
