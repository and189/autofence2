import { defineConfig } from 'vite';

    export default defineConfig({
      server: {
        host: process.env.HOST || '0.0.0.0',
        port: parseInt(process.env.PORT, 10) || 3005
      }
    });
