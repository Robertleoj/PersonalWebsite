import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import wasmPack from 'vite-plugin-wasm-pack';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

/** @type {import('vite').UserConfig} */
const config = {
	// plugins: [sveltekit(), wasmPack('../rust/svelte_test')],
	plugins: [sveltekit(), wasm(), topLevelAwait()],
	resolve: {
		alias: {
			'@components': path.resolve('./src/components'),
			'@icons': path.resolve('./src/icons'),
			'@routes': path.resolve('./src/routes'),
			'@src': path.resolve('./src/'),
		}
	},
	optimizeDeps: {
		include: ['../rust/svelte_test']
	},

	// build: {
	// 	commonjsOptions: {
	// 		include: [/svelte_test/, /node_modules/]
	// 	}
	// }
};

export default config;
