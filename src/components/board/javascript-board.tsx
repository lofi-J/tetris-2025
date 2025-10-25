import type { BoardComponentProps } from "../../config/board.config";
import { JavascriptCell } from "../cell/javascript-cell";

export const JavascriptBoard = ({
  board,
  className,
  style,
}: BoardComponentProps) => {
  return (
    <div className="grid grid-cols-10">
      {board.map((row, rowIndex) =>
        row.map((col, colIndex) => (
          <JavascriptCell
            key={`${rowIndex}-${colIndex}`}
            cell={col}
            className={className}
            style={style}
          />
        )),
      )}
    </div>
  );
};
