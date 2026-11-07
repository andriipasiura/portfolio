const rawLength = /(?<![\w.-])(?!0(?:px|rem)?\b|1px\b)\d*\.?\d+(?:px|rem|em)\b/;

export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      { message: 'Use camelCase class names in CSS modules' },
    ],
    'color-no-hex': true,
    'color-named': 'never',
    'declaration-property-value-disallowed-list': [
      {
        'z-index': [/^-?\d/],
        '/^(margin|padding|gap|row-gap|column-gap|inset|top|right|bottom|left|scroll-margin)/': [
          rawLength,
        ],
      },
      { message: 'Use design tokens for z-index and spacing' },
    ],
  },
  overrides: [
    {
      files: ['src/styles/**/*.scss'],
      rules: {
        'color-no-hex': null,
        'declaration-property-value-disallowed-list': null,
      },
    },
  ],
};
