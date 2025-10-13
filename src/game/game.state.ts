import { BOARD_HEIGHT, BOARD_WIDTH } from "./game.constant";
import type { GameAction, GameState } from "./game.type";
import {
  checkRowIsFull,
  clearLine,
  createRenderBoard,
  getRandomTetromino,
  hardDrop,
  isColliding,
  Queue,
  rotateTetromino,
} from "./game.util";

const initialPos = { x: 4, y: 0 };

export const initialState: GameState = {
  isGameStarted: false,
  isGameOver: false,
  board: Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => 0),
  ),
  tetromino: [],
  nextTetrominos: new Queue(),
  position: initialPos,
  score: 0,
  level: 1,
};

export const gameReducer = (state: GameState, action: GameAction) => {
  const { board, tetromino, position } = state;

  // call drop and hard drop
  const getDequeuedAction = (state: GameState): GameState => {
    const { board, tetromino, position } = state;

    // 1. tetromino to board
    const mergedBoard = createRenderBoard(board, tetromino, position);

    // 2. full row check and remove
    const rowIndices = checkRowIsFull(board, tetromino, position);
    const clearedBoard =
      rowIndices.length > 0 ? clearLine(mergedBoard, rowIndices) : mergedBoard;

    // 3. add new tetromino to queue and get new tetromino from queue
    state.nextTetrominos.enqueue(getRandomTetromino());

    return {
      ...state,
      board: clearedBoard,
      tetromino: state.nextTetrominos.dequeue(), // get new tetromino from queue
      position: initialPos, // reset position
    };
  };

  const checkGameOver = (state: GameState): boolean => {
    const { board, tetromino, position } = state;

    if (position.y <= 1 && isColliding(board, tetromino, position)) {
      return true;
    }
    return false;
  };

  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        isGameStarted: true,
        tetromino: state.nextTetrominos.dequeue(),
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
        if (checkGameOver(state)) {
          return { ...state, isGameOver: true };
        }

        return getDequeuedAction(state);
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

    case "HARD_DROP": {
      if (checkGameOver(state)) {
        return { ...state, isGameOver: true };
      }

      const newState: GameState = {
        ...state,
        position: hardDrop(board, tetromino, position),
      };

      return getDequeuedAction(newState);
    }
  }
};
