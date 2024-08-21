import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory for production build
    rollupOptions: {
      external: ['framer-motion','@radix-ui/react-alert-dialog']
    }
  },
  resolve: {
    alias: {
      'framer-motion': 'framer-motion/dist/framer-motion.js',
    },
  },
});
import { defineConfig } from 'vite';

