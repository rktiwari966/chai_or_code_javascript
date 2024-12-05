import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      "no-console": "warn",     // Example: Warn if console statements are used
      "eqeqeq": "error",        // Example: Enforce strict equality (===)
      "no-unused-vars": "warn", // Example: Warn on unused variables
    }
  },
  pluginJs.configs.recommended,
];
