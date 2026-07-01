import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-static-sites',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url ?? '/';
            // Intercepta qualquer rota que começa com /sites/
            if (url.startsWith('/sites/')) {
              // Normaliza: /sites/aura-grand/ -> /sites/aura-grand/index.html
              let filePath = url.split('?')[0];
              if (filePath.endsWith('/')) filePath += 'index.html';
              const fullPath = path.join(__dirname, 'public', filePath);
              if (fs.existsSync(fullPath)) {
                const ext = path.extname(fullPath).slice(1);
                const mimeTypes: Record<string, string> = {
                  html: 'text/html',
                  css: 'text/css',
                  js: 'application/javascript',
                  png: 'image/png',
                  jpg: 'image/jpeg',
                  svg: 'image/svg+xml',
                };
                res.setHeader('Content-Type', mimeTypes[ext] ?? 'text/plain');
                res.end(fs.readFileSync(fullPath));
                return;
              }
            }
            next();
          });
        },
      },
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
