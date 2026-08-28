import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hoffmeyer-demo.headbangermarketing.com',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
  compressHTML: true,
});
