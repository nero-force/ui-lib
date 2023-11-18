import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Options for the plugin
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/lib/index.tsx',
      name: 'NeroUI',
      formats: ['es', 'umd'],
      fileName: (format) => `nero-ui.${format}.js`
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
