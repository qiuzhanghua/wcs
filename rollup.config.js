import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';

export default {
	input: 'src/index.ts',
	output: [
		{file: "dist/index.es.js", 'format': 'es', name: "my-card"},
		{file: "dist/index.umd.js", 'format': 'umd', name : "my-card"}
	],
	plugins: [
		svelte({
			preprocess: sveltePreprocess(),
			compilerOptions: {
				customElement: true
			}
		}),
		typescript(),
		resolve()
	]
};
