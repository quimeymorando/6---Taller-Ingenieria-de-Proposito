import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/taller-ingenieria-de-proposito/', // Allows opening dist/index.html directly
})
