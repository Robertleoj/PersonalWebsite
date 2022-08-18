
<script lang="ts">
    import {wasmInit as gameInit} from '@wasm/ultimate_tic_tac.js';

    import UltimateTicTac from '@tictac/UltimateTicTac.svelte';

    const loadWasm = gameInit();
    
    
</script>

{#await loadWasm then}
    <UltimateTicTac/>
{/await}
