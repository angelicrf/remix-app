module.exports = {
  env: {
    es2020: true,
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
  },
};
