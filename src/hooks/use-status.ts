import { useEffect, useState } from "react";
import type { Board } from "./use-board";

export const useStatus = (board: Board, score: number) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (score >= 2000) setLevel(2);
    if (score >= 4000) setLevel(3);
    if (score >= 6000) setLevel(4);
    if (score >= 8000) setLevel(5);
    if (score >= 10000) setLevel(6);
    if (score >= 12000) setLevel(7);
    if (score >= 14000) setLevel(8);
  }, [score]);

  useEffect(() => {
    const isTopCellLocked = board.some((col) => col[0].isLocked);
    if (isTopCellLocked) {
      setIsGameOver(true);
    }
  }, [board]);

  return { isGameOver, score, level };
};
