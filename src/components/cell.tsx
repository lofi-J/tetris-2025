import type { Cell } from "../hooks/use-board";

export const JavascriptCell = ({ cell }: { cell: Cell }) => {
  return <div className="cell-size border border-red-500 text-[10px]"></div>;
};
