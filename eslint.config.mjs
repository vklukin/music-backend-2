import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import babelParser from "@babel/eslint-parser";

export default tseslint.config(
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { languageOptions: { globals: globals.browser, parser: babelParser } },
    {
        rules: {
            "no-unused-vars": "error"
        }
    }
);
