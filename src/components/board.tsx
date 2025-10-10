import type { Board } from "../hooks/use-board";
import { JavascriptCell } from "./cell";

export const JavascriptBoard = ({ board }: { board: Board }) => {
  return (
    <div className="grid grid-cols-10">
      {board.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <JavascriptCell key={`${rowIndex}-${colIndex}`} cell={col} />
        )),
      )}
    </div>
  );
};
