module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'typescript-eslint-parser'
  },

  // @ts-ignore
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/prettier',
    '@vue/typescript'
  ]
};
