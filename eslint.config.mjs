import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // 1. Load the standard TypeScript rules
  ...tseslint.configs.recommended,

  // 2. Load the Astro-specific rules
  ...eslintPluginAstro.configs.recommended,

  // 3. Explicitly tell Astro to use the TypeScript parser for its frontmatter
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },

  // 4. Ignore auto-generated folders
  {
    ignores: [".astro/**", "dist/**", "node_modules/**", "env.d.ts"],
  },
];
