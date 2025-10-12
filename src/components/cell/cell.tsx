import { cellConfig, previewCellConfig } from "../../config/cell.config";
import type { ProgrammingLanguage } from "../../context/theme-provider";
import type { CellValue } from "../../game/game.type";

export const BaseCell = ({
  theme,
  cell,
}: {
  theme: ProgrammingLanguage;
  cell: CellValue;
}) => {
  const Component = cellConfig[theme];
  return <Component cell={cell} />;
};

export const BasePreviewCell = ({
  theme,
  cell,
}: {
  theme: ProgrammingLanguage;
  cell: CellValue;
}) => {
  const Component = previewCellConfig[theme];
  return <Component cell={cell} />;
};
