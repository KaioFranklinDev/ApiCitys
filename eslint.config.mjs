// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default [
  
  {
    files: ["**/*.{js,mjs,cjs,ts}"], 
    ignores: ["node_modules"],       
  },

  {
    languageOptions: {
     
      ecmaVersion: "latest",
      sourceType: "module",

      
      globals: {
        ...globals.node,
        
      },

      
      parser: tsParser,
      
    },
  },


  js.configs.recommended,

 
  {
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      
      
      ...tsPlugin.configs.recommended.rules,
      
      "semi": ["error", "always"],

      "space-infix-ops": ["error", { "int32Hint": false }],


      "space-before-blocks": ["error", "always"],

      "comma-spacing": ["error", { "before": false, "after": true }],

      "indent": ["error", 2, { "SwitchCase": 1 }],

      "@typescript-eslint/no-empty-object-type" : "off",
      "@typescript-eslint/no-explicit-any" :"on"
    },
  },
];
