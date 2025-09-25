// vite.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node', // Crucial for Express.js testing
    globals: true, // Makes 'expect', 'it', 'describe' etc. globally available
    include: ['src/**/*.{test,spec}.{js,ts}'],
  },
});
