import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { I, J, L, O, S, T, Z } from "../game/game.constant";

type LoadingProps = {
  size?: number;
  className?: string;
  borderColor?: string;
  cellColor?: string;
};

const sequence = [T, L, I, J, Z, O, S];

const SHAPE_POSITIONS = {
  [T.toString()]: [1, 4, 5, 6],
  [L.toString()]: [2, 4, 5, 6],
  [I.toString()]: [0, 1, 2, 3],
  [J.toString()]: [0, 4, 5, 6],
  [Z.toString()]: [0, 1, 5, 6],
  [O.toString()]: [0, 1, 4, 5],
  [S.toString()]: [1, 2, 4, 5],
};

export const Loading = ({
  size = 16,
  className,
  borderColor = "#000",
  cellColor = "#fff",
}: LoadingProps) => {
  const [index, setIndex] = useState(0);

  const styles: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const getPosByIndex = useCallback(
    (idx: number) => {
      const row = Math.floor(idx / 4);
      const col = idx % 4;

      return {
        x: col * size,
        y: row * size,
      };
    },
    [size],
  );

  const currentShape = sequence[index];
  const currentPositions = SHAPE_POSITIONS[currentShape.toString()] || [
    0, 1, 4, 5,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sequence.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" style={{ width: size * 4, height: size * 4 }}>
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${size}px`, top: `${size}px` }}
      >
        <div className="flex items-center justify-center">
          {currentPositions.map((posIndex, blockIndex) => {
            const pos = getPosByIndex(posIndex);
            return (
              <div
                key={blockIndex}
                className={clsx("loading-block force-cubic-bezier", className)}
                style={{
                  ...styles,
                  borderRadius: "2px",
                  boxSizing: "border-box",
                  borderColor: borderColor,
                  backgroundColor: cellColor,
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
