import { memo } from "react";
import { cellConfig, previewCellConfig } from "../../config/cell.config";
import type { ProgrammingLanguage } from "../../context/theme-provider";
import type { CellValue } from "../../game/game.type";

interface CellProps {
  theme: ProgrammingLanguage;
  cell: CellValue;
}

export const BaseCell = memo(({ theme, cell }: CellProps) => {
  const Component = cellConfig[theme];
  return <Component cell={cell} className="cell-size" />;
});

export const BasePreviewCell = memo(({ theme, cell }: CellProps) => {
  if (!cell) return null;

  const Component = previewCellConfig[theme];
  return <Component cell={cell} className="preview-cell-size" />;
});
