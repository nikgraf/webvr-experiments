module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ["prettier", "prettier/react"],
  plugins: ["react", "import"]
};
