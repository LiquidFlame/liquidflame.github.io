import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://liquidflame.github.io',
	base: '/', // This must be '/' if your URL doesn't have a subfolder
	integrations: [mdx(), sitemap()],
});