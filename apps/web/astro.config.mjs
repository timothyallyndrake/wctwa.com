// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://wctwa.com",
  output: "static",
  trailingSlash: "always",
  redirects: {
    // Legacy WordPress slugs → hybrid IA paths
    "/programs-kids-martial-arts": "/programs/kids-martial-arts/",
    "/programs-tiny-tigers-martial-arts": "/programs/tiny-tigers-martial-arts/",
    "/programs-adults-and-families-martial-arts":
      "/programs/adults-and-families-martial-arts/",
  },
});
