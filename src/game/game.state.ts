import { BOARD_HEIGHT, BOARD_WIDTH } from "./game.constant";
import type { GameAction, GameState } from "./game.type";
import { getRandomTetromino, isColliding } from "./game.util";

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
        console.log("colliding left");
        return { ...state };
      }

      return {
        ...state,
        position: { ...state.position, x: state.position.x - 1 },
      };
    case "MOVE_RIGHT":
      if (isColliding(board, tetromino, { ...position, x: position.x + 1 })) {
        console.log("colliding right");
        return { ...state };
      }

      return {
        ...state,
        position: { ...state.position, x: state.position.x + 1 },
      };
    case "MOVE_DOWN":
      if (isColliding(board, tetromino, { ...position, y: position.y + 1 })) {
        console.log("colliding down");
        return { ...state };
      }

      return {
        ...state,
        position: { ...state.position, y: state.position.y + 1 },
      };
  }
};
