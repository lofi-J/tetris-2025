import type { BoardComponentProps } from "../../config/board.config";
import { JavascriptCell } from "../cell/javascript-cell";
import { IdeBottomStatus } from "./ide-bottom-status";

export const JavascriptBoard = ({
  board,
  gameStatus,
  className,
  style,
}: BoardComponentProps) => {
  return (
    <div className="relative">
      {/* Unified Editor Frame */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-2xl overflow-hidden">
        {/* Console Header */}
        <div className="h-8 bg-gradient-to-r from-gray-800/95 via-gray-750/95 to-gray-800/95 border-b border-gray-700/80 flex items-center px-3 gap-2 backdrop-blur-sm">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/90 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/90 shadow-sm" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/90 shadow-sm" />
          </div>
          <span className="text-[10px] font-mono text-gray-400">
            console.log("tetris.js")
          </span>
        </div>

        {/* Main Content Area */}
        <div className="relative p-3">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5 pointer-events-none" />

          {/* Code line numbers sidebar */}
          <div className="absolute -left-8 top-3 bottom-3 w-6 flex flex-col items-end justify-start gap-[2px] text-[8px] font-mono text-gray-600 select-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="h-[calc(100%/20)] flex items-center">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="relative grid grid-cols-10 gap-[1px] bg-gray-950/50 p-[1px] rounded">
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
        </div>

        {/* Bottom status bar */}
        <div className="h-5 bg-gradient-to-r from-gray-800/95 via-gray-750/95 to-gray-800/95 border-t border-gray-700/80 flex items-center px-3 backdrop-blur-sm">
          <IdeBottomStatus status={gameStatus} />
          <span className="text-[9px] font-mono text-gray-500 ml-auto">
            Ln 20, Col 10
          </span>
        </div>
      </div>
    </div>
  );
};
