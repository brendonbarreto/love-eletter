module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'react-app',
    'react-app/jest'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  },
  plugins: ['jest']
}
