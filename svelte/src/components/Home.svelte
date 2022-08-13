<script lang="ts">
	import { onMount } from 'svelte';
    import NavBar from './NavBar.svelte';
    import Main from './Main.svelte';

	onMount(() => {
		document.documentElement.classList.add('dark');
	});

</script>


<div class="flex">
<NavBar/>
<Main/>
</div>

