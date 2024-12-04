module.exports = {
  env: {
    jest: true, // This tells ESLint to recognize Jest globals
    node: true, // If you're using Node.js for the server
    browser: true, // If you're working in a browser environment
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended", // If you're using Jest, you can add this too
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    // Add any additional rules here
  },
};
