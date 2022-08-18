<script lang="ts">
    import {range} from '@src/utils/base_utils';
    import wasmModule from '@wasm/ultimate_tic_tac';

    let memory = wasmModule.memory.memory;
    let module = wasmModule.module;

    export let game;

    let range3 = range(3);
    

    function cellIdx(br: number, bc: number, sr: number, sc: number): number {
        return (br * 27 
            + bc * 9 
            + sr * 3 
            + sc 
        );
    }

    function boardIdx(br: number, bc: number): number {
        return (br * 3 + bc);
    }

    function getCellBoard(state: any): any {
        return new Uint8Array(memory.buffer, state.cell_ptr, 3 * 3 * 3 * 3);
    }

    function getBoardBoard(state: any): any {
        return new Uint8Array(memory.buffer, state.board_ptr, 3 * 3);
    }



    let state = game.get_state();

    let cellBoard = getCellBoard(state);
    let boardBoard = getBoardBoard(state);

    console.log(cellBoard)
    console.log(boardBoard)

    function cellContent(br:number, bc:number, sr:number, sc:number): any{
        return cellBoard[cellIdx(br, bc, sr, sc)];
    }

</script>

<div class="
    w-screen p-20
">
    <div class="
        w-full% aspect-square
        bg-pink-400
        p-1
    ">

        {#each range3 as br}
            <div class="
                w-full h-1/3
                grid grid-cols-3
            ">
                {#each range3 as bc}
                    <div class="
                        w-full h-full
                        border-pink-400 border-4
                    ">
                        <div class="
                            w-full h-full
                        ">
                            {#each range3 as sr}
                                <div class="
                                    h-1/3 w-full
                                    grid grid-cols-3
                                ">
                                    {#each range3 as sc}
                                        <div class="
                                            w-full h-full
                                            aspect-square
                                            border-gray-900
                                            border-2
                                        ">
                                            <div class="
                                                w-full h-full
                                                bg-gray-700
                                            ">

                                                {#if cellContent(br, bc, sr, sc) === module.CellState.CCircle}
                                                    <svg 
                                                        class="
                                                            text-green-500
                                                        "
                                                        viewBox="0 0 60 60"
                                                    >
                                                        <circle 
                                                            cx="30" cy="30" r="25"
                                                            stroke="currentColor"
                                                            stroke-width="5"
                                                            fill="none"
                                                        >

                                                        </circle>
                                                    </svg>
                                                {:else if cellContent(br, bc, sr, sc) === module.CellState.CCross}
                                                    <div class="p-1 w-full h-full">
                                                        <svg 
                                                            x="0px" y="0px"
                                                            viewBox="0 0 460.775 460.775" 
                                                            class="text-blue-600"
                                                        >
                                                        <path 
                                                            d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                                            c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                                            c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                                            c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                                            l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                                            c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" stroke="currentColor" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                {/if}

                                            </div>

                                        </div>
                                    {/each}

                                </div>
                            {/each}

                        </div>

                    </div>
                {/each}
            </div>
        {/each}

    </div>
</div>