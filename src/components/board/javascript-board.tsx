import type { Board } from "../../game/game.type";
import { JavascriptCell } from "../cell/javascript-cell";

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
