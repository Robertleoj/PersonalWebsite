
use wasm_bindgen::prelude::*;
mod state;
use state::State;

type CellPtr = *const [[[CellState;3];3];3];
type BoardPtr = *const [BoardState;3];


#[wasm_bindgen]
pub fn add(a: usize, b: usize) -> usize {
    a + b
}


#[wasm_bindgen]
#[derive(Clone,Copy)]
#[repr(u8)]
pub enum Player {
    PCross = 0,
    PCircle = 1
}

#[derive(Clone, Copy, PartialEq)]
#[wasm_bindgen]
#[repr(u8)]
pub enum CellState {
    CEmpty = 0,
    CCross = 1,
    CCircle = 2
}

#[derive(Clone, Copy, PartialEq)]
#[wasm_bindgen]
#[repr(u8)]
pub enum GameResult {
    RCross,
    RCircle,
    RDraw,
    RUnfinished
}

#[derive(Clone, Copy, PartialEq)]
#[wasm_bindgen]
#[repr(u8)]
pub enum BoardState {
    BAvailable = 0,
    BDraw = 1,
    BCircle = 2,
    BCross = 3
}

#[wasm_bindgen]
pub struct Game{
    state: State
}

#[derive(Clone,Copy)]
#[wasm_bindgen]
pub struct BoardCoord {
    row: usize,
    col: usize
}

#[wasm_bindgen]
pub struct CellCoord {
    br: usize,
    bc: usize,
    sr: usize,
    sc: usize
}


#[wasm_bindgen]
#[derive(Clone,Copy)]
pub struct APIState {
    pub cell_ptr: CellPtr,
    pub board_ptr: BoardPtr,
    pub has_force_board: bool,
    pub force_board_row: usize,
    pub force_board_col: usize,
    pub turn: Player,
    pub game_result: GameResult
}


#[wasm_bindgen]
impl Game {
    pub fn new() -> Self {
        Game { 
            state: State::new()
        }
    }

    pub fn str(&self) -> String {
        self.state.to_string()
    }

    pub fn get_state(&self) -> APIState {
        let (
            has_force_board,
            force_board_row,
            force_board_col
        ) = match self.state.force_board {
            None => {
                (false, 4, 4)
            },
            Some(BoardCoord{row, col}) => {
                (true, row, col)
            }
        };

        APIState { 
            cell_ptr: self.state.get_cell_ptr(), 
            board_ptr: self.state.get_board_ptr(), 
            has_force_board,
            force_board_row,
            force_board_col,
            turn: self.state.get_turn(), 
            game_result: self.state.game_result,
        }
    }

    pub fn get_board_idx(br: u8, bc: u8, sr: u8, sc: u8) -> u16 {
        br as u16 * 27 
            + bc as u16 * 9 
            + sr as u16 * 3 
            + sc as u16
    }

    pub fn make_move(&mut self,
        br: usize, bc: usize, sr: usize, sc: usize
    ){
        self.state.make_move(CellCoord { br, bc, sr, sc });
    }

}




