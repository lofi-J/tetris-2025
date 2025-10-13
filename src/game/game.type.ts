export type CellValue = number;
export type Board = CellValue[][];

export type Position = {
  x: number;
  y: number;
};

export type Tetromino = number[][];

export type GameState = {
  isGameStarted: boolean;
  isGameOver: boolean;
  board: Board;
  tetromino: Tetromino;
  nextTetrominos: Tetromino[];
  position: Position;
  score: number;
  level: number;
};

export type GameAction =
  | { type: "START_GAME" }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  | { type: "MOVE_DOWN" }
  | { type: "ROTATE" }
  | { type: "HARD_DROP" };
// | { type: 'HOLD'}
// | { type: 'PAUSE'}
// | { type: 'RESUME'}
// | { type: 'RESET'}
