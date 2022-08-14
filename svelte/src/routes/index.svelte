<script>
	//@ts-ignore
	import {onMount} from 'svelte';
	import Home from '../components/HomePage/Home.svelte';

	import init, {greet} from 'svelte-test';

	
	onMount(async () => {
		init().then(()=>greet("Hello"));
	})


</script>

<Home/>