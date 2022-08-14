<script lang="ts">
    import NavBar from '../NavBar.svelte';
    import Profile from "./Profile.svelte";
    import Greet from "./Greet.svelte";
    import Skills from "./Skills.svelte"
    import Widgets from './Widgets.svelte';
</script>


<header>
	<NavBar/>
</header>
<main class="relative top-16 overflow-x-hidden">
	<Profile/>
	<Greet/>
	<Skills/>
    <Widgets/>
</main>

