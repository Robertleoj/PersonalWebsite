<script lang="ts">


    import {range} from '@src/utils/base_utils';
    import wasmModule from '@wasm/ultimate_tic_tac';
    import Circle from './Circle.svelte';
    import Cross from './Cross.svelte';
    import Cell from './Cell.svelte';
    let module = wasmModule.module;
    let range3 = range(3);

    export let boardState: number;
    export let cellContent: (r:number, c:number) => number;
    export let isForceBoard: boolean;
    export let boardMoveAllowed: boolean;
    export let turn: number;

    console.log(`moveAllwed: ${boardMoveAllowed}`)

    function isCircle(){
        return boardState === module.BoardState.BCircle;
    }

    function isCross(){
        return boardState === module.BoardState.BCross;
    }

    function moveAllwed(sr:number, sc:number):boolean {
        return (
            cellContent(sr, sc) === module.CellState.CEmpty
            && (isForceBoard || boardMoveAllowed)
        )
    }

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

    {#if isCircle()}
        <div class="
            w-full h-full
            bg-gray-700
        ">
            <Circle/>
        </div>
    {:else if isCross()}
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
                        cellState={cellContent(sr, sc)}
                        moveAllowed={moveAllwed(sr, sc)}
                        turn={turn}
                    />
                {/each}

            </div>
        {/each}
    {/if}

</div>

