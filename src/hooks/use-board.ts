import { useEffect, useState } from "react";

export type Cell = {
  isLocked: boolean;
  isFilled: boolean;
};

export type Board = Array<Array<Cell>>;
export type SetBoard = React.Dispatch<React.SetStateAction<Board>>;

const INITIAL_BOARD: Board = Array.from({ length: 20 }, () =>
  Array.from({ length: 10 }, () => ({ isLocked: false, isFilled: false })),
);

export const useBoard = () => {
  const [board, setBoard] = useState<Board>(INITIAL_BOARD);
  const [score, setScore] = useState(0); // board에서 clear와 함께 score 증가

  // TODO: add line clear logic and increment score logic
  useEffect(() => {}, []);

  return { board, setBoard, score };
};
