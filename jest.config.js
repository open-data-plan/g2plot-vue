/** @type {import('jest').Config} */
const config = {
  preset: '@opd/jest-preset-pangu',
  setupFiles: [
    'jest-canvas-mock',
    './__tests__/setups/worker.js',
    './__tests__/setups/url.js',
  ],
  transformIgnorePatterns: ['/node_modules/!d3-*'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./**/*.d.ts'],
  testEnvironment: 'jsdom',
}

module.exports = config
