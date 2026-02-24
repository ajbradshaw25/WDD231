import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default [
  puginJs.configs.recommended,
  { 
    languageOptions: { globals: globals.browser },
    rules: {
      semi: "error"
    }
  }
];
