import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
    build: {
        target: "modules",
        cssMinify: 'lightningcss',
    },
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 8000
    },
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            drafts: {
                customMedia: true,
            },
        },
    },
});
