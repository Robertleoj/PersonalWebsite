<script lang="ts">
    import {range} from '@src/utils/base_utils';
    import wasmModule from '@wasm/ultimate_tic_tac';
    import SmallBoard from '@tictac/game/SmallBoard.svelte'
import { src_url_equal } from 'svelte/internal';

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
    let forceBoard = state.has_force_board?{
        row:state.force_board_row,
        col: state.force_board_col
    }: null;

    console.log(cellBoard)
    console.log(boardBoard)

    function cellContent(br:number, bc:number, sr:number, sc:number): any{
        return cellBoard[cellIdx(br, bc, sr, sc)];
    }

    function boardContent(r:number, c:number): any{
        return boardBoard[boardIdx(r, c)];
    }

    function getCellContentFunction(r: number, c:number)  
        :(r:number, c:number) => number
    {
        return (sr, sc) => {
            return cellContent(r, c, sr, sc);
        }
    }

    function isForceBoard(r:number, c:number): boolean{
        return (
            (!!forceBoard) 
            && forceBoard.row === r 
            && forceBoard.col === c
        );
    }

    console.log(forceBoard);


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
                    <SmallBoard 
                        boardState={boardContent(br, bc)}
                        cellContent={getCellContentFunction(br, bc)}
                        isForceBoard={isForceBoard(br, bc)}
                        boardMoveAllowed={isForceBoard(br, bc) || !forceBoard}
                        turn={state.turn}
                    ></SmallBoard>
                {/each}
            </div>
        {/each}

    </div>
</div>