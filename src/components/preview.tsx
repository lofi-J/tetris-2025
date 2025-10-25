import { v4 as uuidv4 } from "uuid";
import { useTheme } from "../context/theme-provider";
import type { Tetromino } from "../game/game.type";
import { BasePreviewCell } from "./cell/cell";

export const Preview = ({ tetromino }: { tetromino: Tetromino }) => {
  const { theme } = useTheme();

  const styles = {
    gridTemplateColumns: `repeat(${tetromino.length}, 1fr)`,
  };

  const alignedTetromino = tetromino.map((row) =>
    row.some((col) => col !== 0) ? row : null,
  );

  return (
    <div className="flex justify-center items-center">
      <div className="grid" style={styles}>
        {alignedTetromino.map((row) => {
          return row?.map((col) => (
            <BasePreviewCell key={uuidv4()} cell={col} theme={theme} />
          ));
        })}
      </div>
    </div>
  );
};
