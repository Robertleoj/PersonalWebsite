<script lang="ts">
    import wasmModule from '@wasm/ultimate_tic_tac';
    import Circle from './Circle.svelte';
    import Cross from './Cross.svelte';
    import stateStore from '@src/stores/UltimateTicTac/game_store';
    import {cellContent} from '@src/utils/TicTac';

    let module = wasmModule.module;

    export let coords:{
        br:number,bc:number
        sr:number,sc:number
    };

    let {cellArr, state} = $stateStore;

    let cellState = cellContent(
        coords.br, coords.bc, 
        coords.sr, coords.sc,
        cellArr
    );

    let moveAllowed = (
        cellState === module.CellState.CEmpty
        &&((
            state.force_board_row === coords.br
            && state.force_board_col == coords.bc
        )||(
            !state.has_force_board
        ))
    );

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
            {#if $stateStore.state.turn === module.Player.PCircle}
                <Circle/>
            {:else if $stateStore.state.turn === module.Player.PCross}
                <Cross/>
            {/if}
        </div>
    {/if}
</div>