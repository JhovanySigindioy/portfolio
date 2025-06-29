import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
		host: '0.0.0.0', // ← Esto permite que Vite escuche en tu IP local (ej: 192.168.x.x)
		port: 5173,
		cors: true,
		headers: {
			'Cross-Origin-Embedder-Policy': 'credentialless',
		},
	},
})
