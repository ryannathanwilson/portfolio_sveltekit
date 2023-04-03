import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [vitePreprocess({ strict: true }), mdsvex(mdsvexConfig)],
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({ strict: true }),
    paths: { base: "" },
    alias: {
      $src: './src',
      $components: './src/lib/components',
      $fonts: './static/fonts',
      $images: './static/images',
      $lib: './src/lib',
      $styles: './src/styles',
      $static: './static',
    }
  }
};

export default config;
