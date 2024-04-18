module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["node_modules/", "dist/", "public/"],
}
