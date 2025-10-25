import { memo } from "react";
import { cellConfig, previewCellConfig } from "../../config/cell.config";
import type { ProgrammingLanguage } from "../../context/theme-provider";
import { useGameSettingStore } from "../../game/game-setting.store";
import type { CellValue } from "../../game/game.type";

interface CellProps {
  theme: ProgrammingLanguage;
  cell: CellValue;
}

export const BaseCell = memo(({ theme, cell }: CellProps) => {
  const Component = cellConfig[theme];
  const cellSize = useGameSettingStore((state) => state.cellSize);
  const style = {
    width: `${cellSize}px`,
    height: `${cellSize}px`,
  };
  return <Component cell={cell} style={style} />;
});

export const BasePreviewCell = memo(({ theme, cell }: CellProps) => {
  const Component = previewCellConfig[theme];
  const previewCellSize = useGameSettingStore((state) => state.previewCellSize);
  const style = {
    width: `${previewCellSize}px`,
    height: `${previewCellSize}px`,
  };
  return <Component cell={cell} style={style} />;
});
