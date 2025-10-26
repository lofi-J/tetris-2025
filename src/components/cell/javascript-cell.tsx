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
        "relative border transition-all duration-75",
        cell
          ? [
              // Filled cell - JavaScript golden/yellow theme
              "bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500",
              "border-amber-600",
              "shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2)]",
              "after:content-['']",
              "after:absolute after:inset-[2px]",
              "after:bg-gradient-to-br after:from-white/20 after:to-transparent",
              "after:rounded-sm",
            ]
          : [
              // Empty cell - Dark console theme
              "bg-gray-900/40",
              "border-gray-700/50",
              "hover:bg-gray-800/30",
              "hover:border-gray-600/50",
            ],
        className,
      )}
      style={style}
    />
  );
};

export const JavascriptPreviewCell = ({
  cell,
  className,
  style,
}: CellComponentProps) => {
  return (
    <div
      className={clsx(
        "relative transition-all duration-200",
        cell
          ? [
              // Preview tetromino - Brighter, glowing effect
              "bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-400",
              "shadow-[0_0_8px_rgba(251,191,36,0.6),inset_0_1px_2px_rgba(255,255,255,0.5)]",
              "border border-amber-400/50",
              "after:content-['']",
              "after:absolute after:inset-[1px]",
              "after:bg-gradient-to-br after:from-white/30 after:to-transparent",
              "after:rounded-sm",
            ]
          : [
              // Empty preview cell - Subtle dark background
              "bg-gray-900/20",
              "border border-gray-700/30",
            ],
        className,
      )}
      style={style}
    />
  );
};
