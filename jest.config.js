module.exports = {
  transform: {
    '\\.[jt]sx?$': [
      'esbuild-jest',
      {
        loaders: {
          '.test.js': 'jsx',
          '.js': 'jsx',
        },
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/styles/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
