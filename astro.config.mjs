import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://sergiomendez.dev',
  base: '/',
  integrations: [tailwind()],
  build: {
    format: 'directory'
  }
});