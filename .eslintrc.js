module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  },
  plugins: ['jest']
}
