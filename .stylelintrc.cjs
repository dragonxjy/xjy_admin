module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-recess-order",
  ],
  overrides: [
    { files: ["**/*.scss"], customSyntax: "postcss-scss" },
    { files: ["**/*.vue"], customSyntax: "postcss-html" },
  ],
  ignoreFiles: ["src/assets/**", "dist/**", "node_modules/**"],
  rules: {
    "no-empty-source": null,
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "scss/dollar-variable-pattern": null,
    "keyframes-name-pattern": null,
    "value-keyword-case": ["lower", { ignoreFunctions: ["v-bind"] }],
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global", "v-deep", "deep", "export"] },
    ],
    "selector-type-no-unknown": [true, { ignoreTypes: ["text", "view"] }],
  },
}
