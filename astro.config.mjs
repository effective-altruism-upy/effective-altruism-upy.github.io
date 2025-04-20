import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  site: 'https://even-more-effective.github.io/effective-altruism-upy.github.io', // Actualiza el site para que coincida con la URL de tu GitHub Pages
  base: '/effective-altruism-upy.github.io/', // Añade la propiedad base con el nombre de tu repositorio
});