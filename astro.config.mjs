// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import typography from "@tailwindcss/typography";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  site: "https://example.com",
  integrations: [svelte()],
});