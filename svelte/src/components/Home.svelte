<script lang="ts">
	import { onMount } from 'svelte';
    import NavBar from './NavBar.svelte';
    import Main from './Main.svelte';

	onMount(() => {
		document.documentElement.classList.add('dark');
	});

</script>


<header>
<NavBar/>
</header>
<main class="relative top-16 overflow-x-hidden">
<Main/>
</main>

