import type { Board } from "../hooks/use-board";
import { JavascriptCell } from "./cell";

export const JavascriptBoard = ({ board }: { board: Board }) => {
  return (
    <div className="grid grid-cols-10">
      {board.map((row, colIndex) => (
        <div key={`js-board-${row[colIndex]}-${colIndex}`}>
          {row.map((cell, cellIndex) => (
            <JavascriptCell
              key={`js-board-${row[colIndex]}-${cellIndex}`}
              cell={cell}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
