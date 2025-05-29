'use strict'

const globals = require('globals')
const { configs: { recommended } } = require('@eslint/js')

module.exports = [recommended, {
  languageOptions: {
    sourceType: 'module',
    globals: {
      ...globals.node,
      ...globals.jest
    }
  },
  rules: {
    // redundant
    'no-console': 'off',
    'no-extra-boolean-cast': 'off',
    'no-prototype-builtins': 'off',
    // text safe
    'eol-last': 'warn',
    indent: 'off',
    'indent-legacy': ['warn', 2],
    'linebreak-style': 'warn',
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
    // spacing safe
    'key-spacing': ['warn', { mode: 'minimum' }],
    'arrow-spacing': 'warn',
    'block-spacing': 'warn',
    'comma-spacing': 'warn',
    'keyword-spacing': 'warn',
    'space-in-parens': 'warn',
    'space-unary-ops': 'warn',
    'func-call-spacing': 'warn',
    'rest-spread-spacing': 'warn',
    'space-before-blocks': 'warn',
    'switch-colon-spacing': 'warn',
    'template-tag-spacing': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-newline': ['warn', 'consistent'],
    'array-element-newline': ['warn', 'consistent'],
    'array-bracket-spacing': 'warn',
    'computed-property-spacing': 'warn',
    'space-before-function-paren': ['warn', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'no-whitespace-before-property': 'warn',
    // vars safe
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': ['warn', {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_'
    }],
    'no-unused-expressions': ['warn', { allowTernary: true }],
    // code-style safe
    semi: ['warn', 'never'],
    curly: ['warn', 'multi-line', 'consistent'],
    strict: 'warn',
    eqeqeq: 'warn',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'wrap-iife': 'warn',
    'brace-style': 'warn',
    'comma-style': 'warn',
    'quote-props': ['warn', 'as-needed'],
    'arrow-parens': 'warn',
    'comma-dangle': 'warn',
    'dot-notation': 'warn',
    'require-await': 'warn',
    'accessor-pairs': 'warn',
    'object-shorthand': 'warn',
    'symbol-description': 'warn',
    'prefer-arrow-callback': 'warn',
    'grouped-accessor-pairs': 'warn',
    'require-atomic-updates': 'warn',
    'no-lonely-if': 'warn',
    'no-new-object': 'warn',
    'no-return-await': 'warn',
    'no-extra-parens': ['warn', 'functions'],
    'no-new-wrappers': 'warn',
    'no-useless-call': 'warn',
    'no-throw-literal': 'warn',
    'no-empty-function': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-duplicate-imports': 'warn',
    'no-array-constructor': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-computed-key': 'warn',
    'no-promise-executor-return': 'warn',
    'no-unsafe-optional-chaining': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-constant-binary-expression': 'warn',
    'no-misleading-character-class': 'warn',
    // code-style unsafe
    'new-parens': 'error',
    'guard-for-in': 'error',
    'default-case-last': 'error',
    'array-callback-return': 'error',
    'no-eval': 'error',
    'no-void': 'error',
    'no-labels': 'error',
    'no-bitwise': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-sequences': 'error',
    'no-lone-blocks': 'error',
    'no-implied-eval': 'error',
    'no-octal-escape': 'error',
    'no-self-compare': 'error',
    'no-useless-return': 'error',
    'no-floating-decimal': 'error',
    'no-use-before-define': ['error', { classes: false, variables: false, functions: false }],
    'no-restricted-globals': ['error', 'toString'],
    'no-unreachable-loop': 'error',
    'no-unmodified-loop-condition': 'error',
    // code-style unsafe but often used during development
    'no-alert': 'warn',
    'no-debugger': 'warn'
  }
}, {
  files: [
    '*.config.js'
  ],
  languageOptions: {
    sourceType: 'script'
  },
  rules: {
    strict: ['warn', 'global']
  }
}]
