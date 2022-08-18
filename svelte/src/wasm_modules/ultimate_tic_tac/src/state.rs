
use super::{
    CellState::{self, *},
    BoardState::{self, *},
    Player::{self, *},
    BoardCoord,
    CellCoord
};


use std::fmt;


type BoardArr = [[[[CellState;3];3];3];3];
type BoardWinsArr = [[BoardState;3];3];


pub struct State {
    board: BoardArr,
    board_wins: BoardWinsArr,
    turn: Player
}

impl State {
    pub fn new() -> Self {
        let board = [[[[CEmpty;3];3];3];3];
        let board_wins = [[BAvailable;3];3];
        let mut s = State {
            board, board_wins, turn: PCross
        };

        s.board[0][0][0][0] = CCircle;
        s.board[0][0][0][1] = CCross;

        s
    }
    pub fn get_cell_ptr(&self) ->  *const [[[CellState;3];3];3]{
        self.board.as_ptr()
    }

    pub fn get_board_ptr(&self) -> *const [BoardState;3] {
        self.board_wins.as_ptr()
    }

    pub fn get_turn(&self) -> Player{
        self.turn
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

