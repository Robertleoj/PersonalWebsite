<script lang="ts">
    //@ts-ignore
    import NavBar from '../NavBar.svelte';
    import Profile from "./Profile.svelte";
    import Greet from "./Greet.svelte";
    import Skills from "./Skills.svelte"
    import Widgets from './Widgets.svelte';
    import test from '../../wasm/svelte_test';

    console.log(test.greet("hello"));

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

