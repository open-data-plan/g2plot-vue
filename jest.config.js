module.exports = {
  preset: '@opd/jest-preset-pangu',
  setupFiles: [
    'jest-canvas-mock',
    './__tests__/setups/worker.js',
    './__tests__/setups/url.js',
  ],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./**/*.d.ts'],
  testEnvironment: 'jsdom',
}
