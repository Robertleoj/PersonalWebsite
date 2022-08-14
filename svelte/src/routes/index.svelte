<script>
	//@ts-ignore
	import {onMount} from 'svelte';
	import Home from '../components/HomePage/Home.svelte';

	import {init as testInit} from '../wasm/svelte_test.js';
	

	const loadWasm = (async () => {
		await testInit();
	})();


</script>

{#await loadWasm then}
	<Home/>
{/await}