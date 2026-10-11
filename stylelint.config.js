const camelCaseNoDigitsRegex = /^[a-z](([a-zA-Z]?)*)$/;
const camelCaseRegex = /^[a-z](([a-zA-Z0-9]?)*)$/;
const camelCaseWithDigitsAndDashesRegex = /^[a-z](([a-zA-Z0-9-_]?)*)$/;

export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "@stylistic/function-parentheses-space-inside": "never-single-line",
    "@stylistic/indentation": null, // just lint, do not pretify
    "@stylistic/string-quotes": "double",
    "at-rule-prelude-no-invalid": [true, { ignoreAtRules: ["mixin"] }],
    "color-hex-length": "long",
    "custom-property-pattern": [
      camelCaseWithDigitsAndDashesRegex,
      "Expected custom property name to be kebab-case (capitals allowed)",
    ],
    "max-nesting-depth": 4,
    "scss/dollar-variable-pattern": [
      camelCaseRegex,
      { message: "Expected $ variable name to be camelCase" },
    ],
    "selector-class-pattern": [
      camelCaseNoDigitsRegex,
      { message: "Expected selector class name to be camelCase (no digits)" },
    ],
    "selector-max-compound-selectors": 4,
    "selector-no-qualifying-type": [true, { ignore: ["attribute"] }],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
    "declaration-property-value-no-unknown": null,
    "scss/declaration-property-value-no-unknown": true,
    "value-keyword-case": null,
  },
};
