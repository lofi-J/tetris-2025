import { BOARD_HEIGHT, BOARD_WIDTH, TETROMINOS } from "./game.constant";
import type { Board, Position, Tetromino } from "./game.type";

export const getRandomTetromino = (): Tetromino => {
  const randomIndex = Math.floor(Math.random() * TETROMINOS.length);
  return TETROMINOS[randomIndex];
};

export const createRenderBoard = (
  board: Board,
  tetromino: Tetromino,
  position: Position,
): Board => {
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
): boolean => {
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

  return false;
};

export const rotateTetromino = (tetromino: Tetromino): Tetromino => {
  const rows = tetromino.length;
  const cols = tetromino[0].length;

  const rotatedTetromino: Tetromino = Array(cols)
    .fill(null)
    .map(() => Array(rows).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      rotatedTetromino[col][rows - 1 - row] = tetromino[row][col];
    }
  }

  return rotatedTetromino;
};

export const hardDrop = (
  board: Board,
  tetromino: Tetromino,
  position: Position,
): Position => {
  const howManyTimesCanBeDropped = HowManyTimesCanBeDropped(
    board,
    tetromino,
    position,
  );

  return { ...position, y: position.y + howManyTimesCanBeDropped };
};

const HowManyTimesCanBeDropped = (
  board: Board,
  tetromino: Tetromino,
  position: Position,
): number => {
  let count = 0;

  while (true) {
    if (
      isColliding(board, tetromino, { ...position, y: position.y + ++count })
    ) {
      break;
    }
  }

  return count - 1; // because the add one in the while loop before break
};

export class Queue {
  private items: Tetromino[];

  // generate 3 random tetrominos at init
  constructor() {
    this.items = [
      getRandomTetromino(),
      getRandomTetromino(),
      getRandomTetromino(),
    ];
  }

  enqueue(item: Tetromino) {
    this.items.push(item);
  }

  dequeue(): Tetromino {
    if (this.isEmpty()) {
      throw new Error("Tetromino Queue is Empty, it's should not happen");
    }

    return this.items.shift() as Tetromino;
  }

  peek() {
    return structuredClone(this.items[0]);
  }

  peekAll() {
    return structuredClone(this.items);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
