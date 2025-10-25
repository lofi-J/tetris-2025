import clsx from "clsx";
import type { CellComponentProps } from "../../config/cell.config";

export const JavascriptCell = ({
  cell,
  className,
  style,
}: CellComponentProps) => {
  return (
    <div
      className={clsx(
        "border border-red-500 text-[10px]",
        cell && "bg-amber-500",
        className,
      )}
      style={style}
    ></div>
  );
};

export const JavascriptPreviewCell = ({
  cell,
  className,
  style,
}: CellComponentProps) => {
  return (
    <div className={clsx(cell && "bg-blue-500", className)} style={style} />
  );
};
