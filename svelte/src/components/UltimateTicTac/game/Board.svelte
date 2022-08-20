<script lang="ts">
    import {range} from '@src/utils/base_utils';
    import wasmModule from '@wasm/ultimate_tic_tac';
    import SmallBoard from '@tictac/game/SmallBoard.svelte'

    import stateStore from '@src/stores/UltimateTicTac/game_store';

    let memory = wasmModule.memory.memory;

    let range3 = range(3);

    let state;
    stateStore.subscribe(s=>{
        state=s;
    });

    function getCellBoard(state: any): any {
        return new Uint8Array(memory.buffer, state.cell_ptr, 3 * 3 * 3 * 3);
    }

    function getBoardBoard(state: any): any {
        return new Uint8Array(memory.buffer, state.board_ptr, 3 * 3);
    }

    let cellBoard = getCellBoard(state);
    let boardBoard = getBoardBoard(state);

</script>

<div class="
    px-5 py-20
    w-full h-full
">
    <div class="
        aspect-square
        mx-auto
        max-h-[800px]
        bg-pink-400
        p-1
    ">

        {#each range3 as br}
            <div class="
                w-full h-1/3
                grid grid-cols-3
            ">
                {#each range3 as bc}
                    <SmallBoard 
                        boardArr={boardBoard}
                        cellArr={cellBoard}
                        coords={{row:br, col:bc}}
                    ></SmallBoard>
                {/each}
            </div>
        {/each}

    </div>
</div>