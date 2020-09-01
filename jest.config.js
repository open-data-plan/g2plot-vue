module.exports = {
  preset: '@opd/jest-preset-pangu',
  setupFiles: ['jest-canvas-mock'],
  transformIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['./src/**/*.{ts,tsx}', '!./**/*.d.ts'],
}
