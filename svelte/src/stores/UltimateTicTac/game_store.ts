
import { writable } from 'svelte/store';

let st:any = writable(null);

function getCellBoard(state: any, memory:any): any {
    return new Uint8Array(memory.buffer, state.cell_ptr, 3 * 3 * 3 * 3);
}

function getBoardBoard(state: any, memory:any): any {
    return new Uint8Array(memory.buffer, state.board_ptr, 3 * 3);
}

function makeState(game:any, memory:any){
    let state = game.get_state();
    let cellArr = getCellBoard(state, memory);
    let boardArr = getBoardBoard(state, memory);

    return {
        game,state, cellArr, boardArr
    };
}

const updateGame = (game:any, memory:any) =>{
    st.update((s: any) => makeState(game, memory));
}

export default st;

export {
    updateGame,
    makeState
}


