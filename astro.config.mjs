import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://tiny-creponne-4bb2f6.netlify.app/",
  integrations: [preact()]
});