import js from "@eslint/js"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettier from "eslint-config-prettier"
import vue from "eslint-plugin-vue"
import vueParser from "vue-eslint-parser"
import globals from "globals"
import autoImports from "./.config/eslint-auto-import.json" with { type: "json" }

export default [
  { ignores: ["dist/**", "node_modules/**", "public/**", "src/assets/**"] },
  js.configs.recommended,
  ...vue.configs["flat/essential"],
  {
    files: ["src/**/*.{ts,vue}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: { parser: tsParser, ecmaVersion: "latest", sourceType: "module" },
      globals: { ...globals.browser, ...globals.node, ...autoImports.globals },
    },
    plugins: { "@typescript-eslint": tsPlugin },
    rules: {
      ...tsPlugin.configs["eslint-recommended"].overrides[0].rules,
      ...tsPlugin.configs.recommended.rules,
      "no-var": "error",
      // Preserve the existing JavaScript style during this dependency update.
      "prefer-const": "off",
      "no-constant-binary-expression": "off",
      "no-useless-assignment": "off",
      "no-useless-escape": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-expressions": ["error", { allowShortCircuit: true }],
      "vue/multi-word-component-names": "off",
      "vue/no-mutating-props": "off",
    },
  },
  prettier,
]
