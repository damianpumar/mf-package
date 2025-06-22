import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite-microfrontend'

// https://vite.dev/config/
export default defineConfig({
  federation: {
    name: 'package',
    exposes: {
      "./package": "./src/App.tsx",
    },
  },
  plugins: [react()],
})
