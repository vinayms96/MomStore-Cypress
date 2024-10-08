import { defineConfig } from "cypress";
import pg from 'pg';
const { Client } = pg;

export default defineConfig({
  e2e: {
    baseUrl: 'https://themomstore.in',
    setupNodeEvents(on, config) {
      on('task', {
        async connectDB(creds) {
          const client = new Client(creds);
          await client.connect();
          try {
            const response = await client.query('SELECT * FROM employees LIMIT 20;');
            return response;
          } catch (err) {
            console.error(err);
          } finally {
            await client.end();
          }
        }
      });
    },
    viewportWidth: 1920,
    viewportHeight: 768,
  },
});
