<script lang="ts">

    //@ts-nocheck
    import wasmModule from '@wasm/ultimate_tic_tac';
    import Circle from './Circle.svelte';
    import Cross from './Cross.svelte';
    import stateStore, {makeState} from '@src/stores/UltimateTicTac/game_store';
    import {cellContent} from '@src/utils/TicTac';

    let module = wasmModule.module;

    export let coords:{
        br:number,bc:number
        sr:number,sc:number
    };

    let moveAllowed, cellState, state, game, finished;

    stateStore.subscribe(v=>{
        ({state, game} = v);
        finished = state.game_result !== module.GameResult.RUnfinished;

        cellState = cellContent(
            coords.br, coords.bc, 
            coords.sr, coords.sc,
            v.cellArr
        );

        moveAllowed = (
            cellState === module.CellState.CEmpty
            && !finished
            &&((
                v.state.force_board_row === coords.br
                && v.state.force_board_col == coords.bc
            )||(
                !v.state.has_force_board
            ))
        );
    })

    function makeMove():void {
        if(moveAllowed){
            game.make_move(
                coords.br, coords.bc, coords.sr, coords.sc
            );

            $stateStore = makeState($stateStore.game, wasmModule.memory.memory);
        }
    }

</script>


<div on:click={makeMove} class="
    w-full h-full
    aspect-square
    border-gray-900
    bg-gray-700
    border-2
    {moveAllowed?"group hover:bg-gray-500":''}
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
            {#if state.turn === module.Player.PCircle}
                <Circle/>
            {:else if state.turn === module.Player.PCross}
                <Cross/>
            {/if}
        </div>
    {/if}
</div>