import { BOARD_HEIGHT, BOARD_WIDTH } from "./game.constant";
import type { GameAction, GameState } from "./game.type";
import { getRandomTetromino } from "./game.util";

const initialPos = { x: 4, y: 0 };

export const initialState: GameState = {
  isGameStarted: false,
  isGameOver: false,
  board: Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => 0),
  ),
  tetromino: [],
  nextTetrominos: [],
  position: initialPos,
  score: 0,
  level: 1,
};

export const gameReducer = (state: GameState, action: GameAction) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        isGameStarted: true,
        tetromino: getRandomTetromino(),
        nextTetrominos: [
          getRandomTetromino(),
          getRandomTetromino(),
          getRandomTetromino(),
          getRandomTetromino(),
          getRandomTetromino(),
        ],
      };
    case "MOVE_LEFT":
      return {
        ...state,
        position: { ...state.position, x: state.position.x - 1 },
      };
    case "MOVE_RIGHT":
      return {
        ...state,
        position: { ...state.position, x: state.position.x + 1 },
      };
    case "MOVE_DOWN":
      return {
        ...state,
        position: { ...state.position, y: state.position.y + 1 },
      };
  }
};
