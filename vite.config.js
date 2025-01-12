import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.txt'],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'txt',
          transform(code, id) {
            if (id.endsWith('.txt')) {
              return {
                code: `export default ${JSON.stringify(code)};`,
                map: null
              };
            }
          }
        }
      ]
    }
  }
})
