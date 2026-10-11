import eslintJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import prettierConfig from "eslint-config-prettier";
import { importX } from "eslint-plugin-import-x";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import a11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { configs } from "typescript-eslint";

export default defineConfig([
  globalIgnores(["*", "!src/"]), // only lint `/src/` folder
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["./**/*.json"],
    extends: eslintPluginJsonc.configs["recommended-with-json"],
    rules: {
      "jsonc/comma-dangle": "off", // handled by prettier
      "jsonc/sort-array-values": [
        "error",
        { pathPattern: ".*", order: { type: "asc" } },
      ],
      "jsonc/sort-keys": [
        "error",
        "asc",
        { caseSensitive: true, natural: true },
      ],
    },
  },
  {
    files: ["./**/*.tsx", "./**/*.ts"],
    extends: [
      eslintJs.configs.recommended,
      configs.strictTypeChecked,
      configs.stylisticTypeChecked,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript,
      pluginReact.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      a11y.flatConfigs.strict,
      // note: below configs must go last so they override conflicting (redundant) rules
      prettierConfig,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.node, // process
        ...globals.browser, // console etc...
      },
    },
    rules: {
      "@typescript-eslint/ban-tslint-comment": "off",
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: {
            memberTypes: "never",
            order: "alphabetically-case-insensitive",
          },
        },
      ],
      "@typescript-eslint/no-confusing-non-null-assertion": "off", // redundant, null assertions are not allowed
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-extra-non-null-assertion": "off", // redundant, null assertions are not allowed
      "@typescript-eslint/no-invalid-void-type": "off",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off", // redundant, null assertions are not allowed
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off", // redundant, null assertions are not allowed
      "@typescript-eslint/no-shadow": [
        "error",
        { builtinGlobals: true, hoist: "all" },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/non-nullable-type-assertion-style": "off", // redundant, null assertions are not allowed
      "@typescript-eslint/prefer-destructuring": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        { allowNumber: true },
      ],
      "@typescript-eslint/strict-void-return": "off",
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        { considerDefaultExhaustiveForUnions: true },
      ],
      "@typescript-eslint/unbound-method": "off",
      "array-callback-return": "error",
      "arrow-body-style": ["error", "as-needed"],
      camelcase: "error",
      curly: "error",
      "default-param-last": "error",
      "dot-notation": "error",
      eqeqeq: "error",
      "import-x/first": "error",
      "import-x/namespace": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-default-export": "error",
      "@typescript-eslint/no-deprecated": "error",
      "import-x/no-duplicates": ["error", { "prefer-inline": true }],
      "import-x/no-extraneous-dependencies": "error",
      "import-x/no-mutable-exports": "error",
      "import-x/no-nodejs-modules": "error",
      "import-x/no-self-import": "error",
      "import-x/no-unassigned-import": [
        "error",
        { allow: ["**/*.css", "**/*.scss"] },
      ],
      "import-x/no-unresolved": ["error", {caseSensitive: false}],
      "import-x/no-useless-path-segments": "error",
      "import-x/no-webpack-loader-syntax": "error",
      "import-x/order": [
        "error",
        {
          groups: [
            ["builtin", "external", "internal"],
            "parent",
            ["sibling", "index"],
          ],
          named: true,
          "newlines-between": "always",
          pathGroups: [
            {
              group: "external",
              pattern: "react",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          warnOnUnassignedImports: true,
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "jsx-a11y/control-has-associated-label": "error",
      // Recommended exception taken from: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/8f75961d965e47afb88854d324bd32fafde7acfe/docs/rules/no-noninteractive-element-to-interactive-role.md
      "jsx-a11y/no-noninteractive-element-to-interactive-role": [
        "error",
        {
          li: ["menuitem", "option", "row", "tab", "treeitem"],
          ol: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
          table: ["grid"],
          td: ["gridcell"],
          ul: [
            "listbox",
            "menu",
            "menubar",
            "radiogroup",
            "tablist",
            "tree",
            "treegrid",
          ],
        },
      ],
      "logical-assignment-operators": ["error", "never"],
      "max-depth": ["error", 3],
      "max-nested-callbacks": ["error", 4],
      "max-params": ["error", 3],
      "no-alert": "error",
      "no-caller": "error",
      "no-case-declarations": "off",
      "no-console": "warn",
      "no-debugger": "warn",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-extend-native": "error",
      "no-implied-eval": "error",
      "no-inner-declarations": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-multi-str": "error",
      "no-new": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-object-constructor": "error",
      "no-octal": "off", // TS already disallows const num = 071;
      "no-octal-escape": "error",
      "no-param-reassign": "error",
      "no-promise-executor-return": "error",
      "no-proto": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow-restricted-names": "off", // covered by @typescript-eslint/no-shadow
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-unassigned-vars": "error",
      "no-undef-init": "error",
      "no-unmodified-loop-condition": "error",
      "no-unneeded-ternary": "error",
      "no-unreachable": "error",
      "no-useless-assignment": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "object-shorthand": "error",
      "one-var": ["error", "never"],
      "operator-assignment": "error",
      "prefer-destructuring": "error",
      "prefer-object-spread": "error",
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": "error",
      "prefer-template": "error",
      "preserve-caught-error": "error",
      radix: "error",
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/void-use-memo": "error",
      "react/button-has-type": "error",
      "react/forward-ref-uses-ref": "error",
      "react/jsx-boolean-value": "error",
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
      "react/jsx-max-depth": ["error", { max: 6 }],
      "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
      "react/jsx-no-constructed-context-values": "error",
      "react/jsx-no-script-url": "error",
      "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
      "react/jsx-pascal-case": "error",
      "react/jsx-props-no-spread-multi": "error",
      "react/no-access-state-in-setstate": "error",
      "react/no-namespace": "error",
      "react/no-object-type-as-default-prop": "error",
      "react/no-unstable-nested-components": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off", // covered by TS
      "react/require-render-return": "off",
      "react/self-closing-comp": "error",
      "react/void-dom-elements-no-children": "error",
      "require-await": "error",
      "require-jsdoc": "off",
      "sort-keys": ["error", "asc"],
      strict: ["error", "never"],
      "valid-jsdoc": "off",
      "valid-typeof": "off", // already covered by TS
      yoda: "error",
    },
  },
  {
    files: ["./**/*.d.ts"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
]);
