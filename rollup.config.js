import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg  from './package.json' assert { type: 'json' };
import typescript from '@rollup/plugin-typescript';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.ts',
	output: [
		{ file: "dist/index.es.js", 'format': 'es', name: "my-card"},
		{ file: "dist/index.umd.js", 'format': 'umd', name : "my-card"}
	],
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			}
		}),
		typescript(),
		resolve()
	]
};
