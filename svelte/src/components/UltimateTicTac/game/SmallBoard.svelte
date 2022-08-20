<script lang="ts">
    //@ts-nocheck
    import {range} from '@src/utils/base_utils';
    import wasmModule from '@wasm/ultimate_tic_tac';
    import Circle from './Circle.svelte';
    import Cross from './Cross.svelte';
    import Cell from './Cell.svelte';
    import stateStore from '@src/stores/UltimateTicTac/game_store';
    import {boardContent} from '@src/utils/TicTac';
    

    let state;
    stateStore.subscribe(s=>{
        state=s;
    });

    let module = wasmModule.module;
    let range3 = range(3);

    export let coords: {row:number, col: number};
    export let boardArr: any;
    export let cellArr: any;

    let isForceBoard = (
        state.force_board_row == coords.row 
        && state.force_board_col == coords.col
    );

</script>
<div class="
    {isForceBoard?`
        border-green-500
        border-6
    `:`
        border-pink-400
        border-4
    `} 
    w-full h-full
">

    {#if boardContent(coords.row, coords.col, boardArr) === module.BoardState.BCircle}
        <div class="
            w-full h-full
            bg-gray-700
        ">
            <Circle/>
        </div>
    {:else if boardContent(coords.row, coords.col, boardArr) === module.BoardState.BCross}
        <div class="
            w-full h-full
            bg-gray-700
        ">
            <Cross/>
        </div>
    {:else}
        {#each range3 as sr}
            <div class="
                h-1/3 w-full
                grid grid-cols-3
            ">
                {#each range3 as sc}
                    <Cell
                        coords={{
                            br:coords.row, bc:coords.col,
                            sr:sr,sc:sc
                        }}
                        cellArr={cellArr}

                    />
                {/each}

            </div>
        {/each}
    {/if}

</div>

