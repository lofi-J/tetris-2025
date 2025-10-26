import { BOARD_HEIGHT, BOARD_WIDTH } from "./game.constant";
import type { Board, GameAction, GameState } from "./game.type";
import {
  checkRowIsFull,
  clearLine,
  createRenderBoard,
  getSafePositionWhenColliding,
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

    // 4. get new tetromino from queue
    const newTetromino = state.nextTetrominos.dequeue();

    // 5. check game over: if new tetromino collides at spawn position
    if (isColliding(clearedBoard, newTetromino, initialPos)) {
      return {
        ...state,
        board: clearedBoard,
        tetromino: newTetromino,
        position: initialPos,
        status: "gameover",
      };
    }

    return {
      ...state,
      board: clearedBoard,
      tetromino: newTetromino,
      position: initialPos,
    };
  };

  switch (action.type) {
    case "SET_STATUS": {
      const tetromino =
        state.status === "idle"
          ? state.nextTetrominos.dequeue()
          : state.tetromino;
      return {
        ...state,
        status: action.status,
        tetromino: tetromino,
      };
    }

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
        return getDequeuedAction(state);
      }

      return {
        ...state,
        position: { ...state.position, y: state.position.y + 1 },
      };

    case "ROTATE": {
      const rotatedTetromino = rotateTetromino(tetromino);

      if (isColliding(board, rotatedTetromino, position)) {
        const safePosition = getSafePositionWhenColliding(
          board,
          rotatedTetromino,
          position,
        );

        // 안전한 위치를 찾지 못하면 회전하지 않음
        if (!safePosition) {
          return { ...state };
        }

        return {
          ...state,
          tetromino: rotatedTetromino,
          position: safePosition,
        };
      }

      return { ...state, tetromino: rotatedTetromino };
    }

    case "HARD_DROP": {
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
