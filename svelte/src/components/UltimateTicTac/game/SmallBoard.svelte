<script lang="ts">
    //@ts-nocheck
    import {range} from '@src/utils/base_utils';
    import wasmModule from '@wasm/ultimate_tic_tac';
    import Circle from './Circle.svelte';
    import Cross from './Cross.svelte';
    import Cell from './Cell.svelte';
    import stateStore from '@src/stores/UltimateTicTac/game_store';
    import {boardContent} from '@src/utils/TicTac';
    
    let module = wasmModule.module;

    let range3 = range(3);

    export let coords: {row:number, col: number};

    let force_board_row, force_board_col, isForceBoard, finished;

    stateStore.subscribe(v=>{
        ({force_board_row, force_board_col} = v.state);
        finished = v.state.game_result !== module.GameResult.RUnfinished;

        isForceBoard = (
            force_board_row == coords.row 
            && force_board_col == coords.col
            && !finished
        );
    });
</script>

<div class="
    {isForceBoard?`
        border-green-500
        border-4
    `:`
        border-pink-400
        border-4
    `} 
    w-full h-full
">

    {#if boardContent(coords.row, coords.col, $stateStore.boardArr) === module.BoardState.BCircle}
        <div class="
            w-full h-full
            bg-gray-700
        ">
            <Circle/>
        </div>
    {:else if boardContent(coords.row, coords.col, $stateStore.boardArr) === module.BoardState.BCross}
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
                    />
                {/each}

            </div>
        {/each}
    {/if}

</div>

