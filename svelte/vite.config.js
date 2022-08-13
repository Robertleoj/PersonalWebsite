import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components': path.resolve('./src/components'),
			'@icons': path.resolve('./src/icons'),
			'@routes': path.resolve('./src/routes'),
			'@src': path.resolve('./src/'),
		}
	}
};

export default config;
