import { BOARD_HEIGHT, BOARD_WIDTH } from "./game.constant";
import type { Board, GameAction, GameState } from "./game.type";
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
  status: "idle",
  board: Array.from({ length: BOARD_HEIGHT }, () =>
    Array.from({ length: BOARD_WIDTH }, () => 0),
  ),
  tetromino: [],
  nextTetrominos: new Queue(),
  position: initialPos,
  score: 0,
  level: 1,
};

export const gameReducer = (
  state: GameState,
  action: GameAction,
): GameState => {
  const { board, tetromino, position } = state;

  // will be called by drop and hard drop
  const getDequeuedAction = (state: GameState): GameState => {
    const { board, tetromino, position } = state;

    // 1. tetromino to board
    const mergedBoard = createRenderBoard(board, tetromino, position);

    // 2. full row check and remove
    const rowIndices = checkRowIsFull(board, tetromino, position);

    // 3. add score and drop line index
    let clearedBoard: Board = mergedBoard;
    if (rowIndices.length > 0) {
      state.score += rowIndices.length * 100; // 100 points by one line TODO: consider level
      clearedBoard = clearLine(mergedBoard, rowIndices);
    }

    // 4. add new tetromino to queue and get new tetromino from queue
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
    case "SET_STATUS":
      return {
        ...state,
        status: action.status,
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
          return { ...state, status: "gameover" };
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
        return { ...state, status: "gameover" };
      }

      const newState: GameState = {
        ...state,
        position: hardDrop(board, tetromino, position),
      };

      return getDequeuedAction(newState);
    }

    case "INCREASE_LEVEL": {
      return { ...state, level: state.level + 1 };
    }
  }
};
