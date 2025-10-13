import { BOARD_HEIGHT, BOARD_WIDTH } from "./game.constant";
import type { GameAction, GameState } from "./game.type";
import { getRandomTetromino, isColliding, rotateTetromino } from "./game.util";

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
  const { board, tetromino, position } = state;
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
      if (isColliding(board, tetromino, { ...position, x: position.x - 1 })) {
        return { ...state };
      }

      return {
        ...state,
        position: { ...state.position, x: state.position.x - 1 },
      };
    case "MOVE_RIGHT":
      if (isColliding(board, tetromino, { ...position, x: position.x + 1 })) {
        return { ...state };
      }

      return {
        ...state,
        position: { ...state.position, x: state.position.x + 1 },
      };
    case "MOVE_DOWN":
      if (isColliding(board, tetromino, { ...position, y: position.y + 1 })) {
        return { ...state };
      }

      return {
        ...state,
        position: { ...state.position, y: state.position.y + 1 },
      };
    case "ROTATE": {
      const rotatedTetromino = rotateTetromino(tetromino);
      if (isColliding(board, rotatedTetromino, position)) {
        return { ...state };
      }

      return { ...state, tetromino: rotatedTetromino };
    }
  }
};
