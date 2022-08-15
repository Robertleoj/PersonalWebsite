import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import wasmPack from 'vite-plugin-wasm-pack';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		wasm(), 
		topLevelAwait(),
		sveltekit(),
	],
	build: {
		rollupOptions: {
			external: ['wasm-ultimate-tic-tac']
		}
	},
	resolve: {
		alias: {
			'@components': path.resolve('./src/components'),
			'@icons': path.resolve('./src/icons'),
			'@routes': path.resolve('./src/routes'),
			'@src': path.resolve('./src'),
			'@wasm':path.resolve('./src/wasm'),
			'@tictac': path.resolve('./src/components/UltimateTicTac')
		}
	},
};

export default config;
