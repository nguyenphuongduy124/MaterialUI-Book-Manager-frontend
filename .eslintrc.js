module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: 'path/to/config.js',
    },
  },
  rules: {
    'prop-types': 0,
    'linkbreak-style': 0,
    'no-console': 1,
    'import/no-extraneous-dependencies': 0,
    'class-methods-use-this': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    eqeqeq: 1,
    'no-empty': 1,
    'prettier/prettier': [0],
  },
  overrides: [
    {
      files: ['files/transformed/by/babel/*.js'],

      parser: 'babel-eslint',
    },
  ],
};
