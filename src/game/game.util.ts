import { BOARD_HEIGHT, BOARD_WIDTH, TETROMINOS } from "./game.constant";
import type { Board, Position, Tetromino } from "./game.type";

export const getRandomTetromino = () => {
  const randomIndex = Math.floor(Math.random() * TETROMINOS.length);
  return TETROMINOS[randomIndex];
};

export const createRenderBoard = (
  board: Board,
  tetromino: Tetromino,
  position: Position,
) => {
  const renderBoard = structuredClone(board);

  if (!tetromino) return renderBoard;

  for (let y = 0; y < tetromino.length; y++) {
    for (let x = 0; x < tetromino[y].length; x++) {
      if (tetromino[y][x] === 1) {
        const posY = y + position.y;
        const posX = x + position.x;

        renderBoard[posY][posX] = 1;
      }
    }
  }

  return renderBoard;
};

export const isColliding = (
  board: Board,
  tetromino: Tetromino,
  position: Position,
) => {
  if (!tetromino) return false;

  for (let y = 0; y < tetromino.length; y++) {
    for (let x = 0; x < tetromino[y].length; x++) {
      if (tetromino[y][x] === 1) {
        const posY = y + position.y;
        const posX = x + position.x;

        // Check if the tetromino is out of board frame
        if (posX < 0 || posX > BOARD_WIDTH - 1) {
          return true;
        }

        // Check if the tetromino is touching the bottom of the board
        if (posY === BOARD_HEIGHT) {
          return true;
        }

        // Check if the tetromino is colliding with the rocks
        if (board[posY][posX] === 1) {
          return true;
        }
      }
    }
  }
};
