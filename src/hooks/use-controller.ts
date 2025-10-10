import { useEffect } from "react";
import type { Board, SetBoard } from "./use-board";

export const useController = (board: Board, setBoard: SetBoard) => {
  const boardCenter = Math.floor(board.length / 2);

  const _checkCollision = () => {};

  const generateTetromino = () => {};

  const moveTetromino = () => {};

  const rotateTetromino = () => {};

  useEffect(() => {}, []);

  return null;
};
