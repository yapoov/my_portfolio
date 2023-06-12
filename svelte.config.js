import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
import { importAssets } from 'svelte-preprocess-import-assets';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [importAssets()],
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: dev ? '' : '/my_portfolio'
		}
	}
};

export default config;
