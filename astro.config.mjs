// @ts-check
<<<<<<< HEAD
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://BryanGrandon.github.io',
  base: '/Tesorito-de-Mateo',

=======
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
>>>>>>> parent of 229358e (deploy)
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});