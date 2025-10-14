import type { Queue } from "./game.util";

export type CellValue = number;
export type Board = CellValue[][];

export type Position = {
  x: number;
  y: number;
};

export type Tetromino = number[][];

export type Status = "idle" | "playing" | "paused" | "gameover";

export type GameState = {
  status: Status;
  board: Board;
  tetromino: Tetromino;
  nextTetrominos: Queue;
  position: Position;
  score: number;
  level: number;
};

export type GameAction =
  | { type: "SET_STATUS"; status: Status }
  | { type: "MOVE_LEFT" }
  | { type: "MOVE_RIGHT" }
  | { type: "MOVE_DOWN" }
  | { type: "ROTATE" }
  | { type: "HARD_DROP" }
  | { type: "INCREASE_LEVEL" };
// | { type: 'HOLD'}
// | { type: 'PAUSE'}
// | { type: 'RESUME'}
