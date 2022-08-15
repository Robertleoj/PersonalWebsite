
use super::CellState::{self, *};
use super::BoardState::{self, *};
use super::Player::{self, *};
use wasm_bindgen::prelude::*;

use std::fmt;



#[wasm_bindgen]
pub struct State {
    board: [[[[CellState;3];3];3];3],
    board_wins: [[BoardState;3];3],
    turn: Player
}

#[wasm_bindgen]
impl State {
    pub fn new() -> Self {
        let board = [[[[CEmpty;3];3];3];3];
        let board_wins = [[BAvailable;3];3];
        State {
            board, board_wins, turn: PCross
        }
    }

    pub fn get_idx(br: u8, bc: u8, sr: u8, sc: u8) -> u16 {
        br as u16 * 27 
            + bc as u16 * 9 
            + sr as u16 * 3 
            + sc as u16
    }
    
    pub fn render(&self) -> String {
        self.to_string()
    }
}

impl fmt::Display for State {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {

        let bar = "-".repeat(11);

        for br_idx in 0..3{

            for sr_idx in 0..3 {
                for bcol_idx in 0..3 {

                    for sc_idx in 0..3 {

                        write!(f, " {}", match self.board_wins[br_idx][bcol_idx] {
                            BAvailable | BDraw => {
                                match self.board[br_idx][bcol_idx][sr_idx][sc_idx] {
                                    CCircle => "🟢",
                                    CCross => "❌",
                                    CEmpty => "⬜"
                                }
                            },
                            BCircle => "🟩",
                            BCross => "🟥"
                        })?;
                    }
                    if bcol_idx != 2 {
                        write!(f, "  | ")?;
                    }
                }
                write!(f, "\n")?;
            }

            if br_idx != 2 {
                write!(f, "{}\n", vec![bar.clone(), bar.clone(), bar.clone()].join("+"))?;
            }


        }
        Ok(())
    }
}

