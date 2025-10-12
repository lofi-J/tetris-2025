import clsx from "clsx";
import type { CellValue } from "../../game/game.type";

export const JavascriptCell = ({ cell }: { cell: CellValue }) => {
  return (
    <div
      className={clsx(
        "cell-size border border-red-500 text-[10px] min-w-5 min-h-5",
        cell && "bg-amber-500",
      )}
    ></div>
  );
};

export const JavascriptPreviewCell = ({ cell }: { cell: CellValue }) => {
  return (
    <div
      className={clsx("cell-size min-w-5 min-h-5", cell && "bg-blue-500")}
    ></div>
  );
};
