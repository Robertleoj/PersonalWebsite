
use wasm_bindgen::prelude::*;
mod state;
use state::State;


#[wasm_bindgen]
pub fn add(a: usize, b: usize) -> usize {
    a + b
}


#[wasm_bindgen]
#[repr(u8)]
pub enum Player {
    PCross = 0,
    PCircle = 1
}

#[derive(Clone, Copy)]
#[wasm_bindgen]
#[repr(u8)]
pub enum CellState {
    CEmpty = 0,
    CCross = 1,
    CCircle = 2
}

#[derive(Clone, Copy)]
#[wasm_bindgen]
#[repr(u8)]
pub enum BoardState {
    BAvailable = 0,
    BDraw = 1,
    BCircle = 2,
    BCross = 3
}





