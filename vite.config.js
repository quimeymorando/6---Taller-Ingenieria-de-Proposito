import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: 'https://taller-ingenieria-de-proposito.vercel.app/', // Ensures assets load correctly when proxied/masked from another domain
})
