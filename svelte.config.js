import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/_layout.svelte'
			}
		})],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$components: resolve('./src/components'),
					$static: resolve('./static')
				}
			}
		}
	}

};

export default config;
