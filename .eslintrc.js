module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 2], //modificando indentación
  },
  ignorePatterns: ["/dist/*"],
};
