<script lang="ts">

import wasmModule from '@wasm/ultimate_tic_tac';
    import Circle from './Circle.svelte';
    import Cross from './Cross.svelte';

    let module = wasmModule.module;

    export let cellState: number;
    export let moveAllowed: boolean;
    export let turn: number;

</script>


<div class="
    w-full h-full
    aspect-square
    border-gray-900
    bg-gray-700
    border-2
    {moveAllowed?'group hover:bg-gray-500':''}
">
    {#if cellState === module.CellState.CCircle}
        <Circle/>
    {:else if cellState === module.CellState.CCross}
        <Cross/>
    {:else if moveAllowed}
        <div class="
            scale-0
            group-hover:scale-100
        ">
            {#if turn === module.Player.PCircle}
                <Circle/>
            {:else if cellState === module.Player.PCross}
                <Cross/>
            {/if}
        </div>
    {/if}
</div>