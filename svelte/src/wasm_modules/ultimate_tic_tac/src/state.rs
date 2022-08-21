
use super::{
    CellState::{self, *},
    BoardState::{self, *},
    Player::{self, *},
    GameResult::{self, *},
    BoardCoord,
    CellCoord
};


use std::{fmt, rc::Rc};


type BoardArr = [[[[CellState;3];3];3];3];
type BoardWinsArr = [[BoardState;3];3];


pub struct State {
    board: BoardArr,
    board_wins: BoardWinsArr,
    turn: Player,
    pub force_board: Option<BoardCoord>,
    pub game_result: GameResult
}

impl State {
    pub fn new() -> Self {
        let board = [[[[CEmpty;3];3];3];3];
        let board_wins = [[BAvailable;3];3];
        State {
            board, 
            board_wins, 
            turn: PCross, 
            force_board: None, 
            game_result: RUnfinished
        }
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

    pub fn update_game_result(&mut self){
        let mut draw = true;
        let board = &self.board_wins;

        let mut winner= None;
        for rc in 0..3 {

            draw = draw && !board[rc].iter().any(|v|*v == BAvailable);

            // check row wins
            if 
                self.board_wins[rc][0] == self.board_wins[rc][1]
                && board[rc][1] == board[rc][2]
            {
                match &board[rc][0] {
                    BAvailable|BDraw => {},
                    BCross => {winner = Some(RCross);},
                    BCircle => {winner = Some(RCircle);}
                }
            }

            // check col wins
            if 
                board[0][rc] == board[1][rc]
                && board[1][rc] == board[2][rc]
            {
                match &board[0][rc] {
                    BAvailable | BDraw => {},
                    BCross => {winner = Some(RCross);},
                    BCircle => {winner = Some(RCircle);}
                }
            }

            if let Some(w) = winner {
                self.game_result = w;
                return;
            }
        }

        if draw {
            self.game_result = RDraw;
            return;
        }

        // check diagonal wins

        if 
            board[0][0] == board[1][1] 
            && board[1][1] == board[2][2]
        {
            match &board[0][0] {
                BAvailable | BDraw => {},
                BCross => {winner = Some(RCross);},
                BCircle => {winner = Some(RCircle);}
            }           
        }

        if 
            board[0][2] == board[1][1] 
            && board[1][1] == board[2][0]
        {
            match &board[0][2] {
                BAvailable | BDraw => {},
                BCross => {winner = Some(RCross);},
                BCircle => {winner = Some(RCircle);}
            }
        }

        if let Some(w) = winner {
            self.game_result = w;
        }

    }

    pub fn update_win_board(&mut self, coord: BoardCoord) {
        let board = &self.board[coord.row][coord.col];

        let mut draw = true;
        let mut winner= None;
        for rc in 0..3 {

            draw = draw && !board[rc].iter().any(|v|*v == CEmpty);

            // check row wins
            if 
                board[rc][0] == board[rc][1]
                && board[rc][1] == board[rc][2]
            {
                match &board[rc][0] {
                    CEmpty => {},
                    CCross => {winner = Some(BCross);},
                    CCircle => {winner = Some(BCircle);}
                }
            }

            // check col wins
            if 
                board[0][rc] == board[1][rc]
                && board[1][rc] == board[2][rc]
            {
                match &board[0][rc] {
                    CEmpty => {},
                    CCross => {winner = Some(BCross);},
                    CCircle => {winner = Some(BCircle);}
                }
            }

            if let Some(w) = winner {
                self.board_wins[coord.row][coord.col] = w;
                return;
            }
        }

        if draw {
            self.board_wins[coord.row][coord.col] = BDraw;
            return;
        }

        // check diagonal wins

        if 
            board[0][0] == board[1][1] 
            && board[1][1] == board[2][2]
        {
            match &board[0][0] {
                CEmpty => {},
                CCross => {winner = Some(BCross);},
                CCircle => {winner = Some(BCircle);}
            }           
        }

        if 
            board[0][2] == board[1][1] 
            && board[1][1] == board[2][0]
        {
            match &board[0][2] {
                CEmpty => {},
                CCross => {winner = Some(BCross);},
                CCircle => {winner = Some(BCircle);}
            }
        }

        if let Some(w) = winner {
            self.board_wins[coord.row][coord.col] = w;
        }

    }

    pub fn make_move(&mut self, coord: CellCoord){
        self.board[coord.br][coord.bc][coord.sr][coord.sc] = match self.turn {
            PCross => CCross,
            PCircle => CCircle
        };

        self.turn = match self.turn {
            PCross => PCircle,
            PCircle => PCross
        };

        self.update_win_board(BoardCoord{row:coord.br, col:coord.bc});
        self.update_game_result();

        if self.game_result == RUnfinished {
            let (fb_row, fb_col) = (coord.sr, coord.sc);

            if self.board_wins[fb_row][fb_col] == BAvailable {
                self.force_board = Some(BoardCoord{
                    row: fb_row, col: fb_col
                })
            } else {
                self.force_board = None;
            }
        }
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

