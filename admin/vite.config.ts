import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

import tailwindcss from "@tailwindcss/vite"

import path from "node:path"

// Vite config — https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),

      tailwindcss(),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    server: {
      host: "0.0.0.0",
      port: parseInt(process.env.PORT || "8443"),
      strictPort: false,
      allowedHosts: [".ngrok-free.dev"],
    },

    preview: {
      host: "0.0.0.0",

      port: parseInt(process.env.PORT || "8443"),

      allowedHosts: [".ngrok-free.dev"],
    },

    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          student: path.resolve(__dirname, 'student.html'),
        },
      },
    },
  }
})
