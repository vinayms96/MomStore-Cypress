import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://themomstore.in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1920,
    viewportHeight: 768,
  },
});
