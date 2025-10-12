import {
  JavascriptCell,
  JavascriptPreviewCell,
} from "../components/cell/javascript-cell";
import type { ProgrammingLanguage } from "../context/theme-provider";
import type { CellValue } from "../game/game.type";

export const cellConfig: Record<
  ProgrammingLanguage,
  React.FC<{ cell: CellValue }>
> = {
  javascript: JavascriptCell,
  typescript: JavascriptCell,
  python: JavascriptCell,
  java: JavascriptCell,
  "c++": JavascriptCell,
  "c#": JavascriptCell,
  ruby: JavascriptCell,
  swift: JavascriptCell,
  rust: JavascriptCell,
  go: JavascriptCell,
};

export const previewCellConfig: Record<
  ProgrammingLanguage,
  React.FC<{ cell: CellValue }>
> = {
  javascript: JavascriptPreviewCell,
  typescript: JavascriptPreviewCell,
  python: JavascriptPreviewCell,
  java: JavascriptPreviewCell,
  "c++": JavascriptPreviewCell,
  "c#": JavascriptPreviewCell,
  ruby: JavascriptPreviewCell,
  swift: JavascriptPreviewCell,
  rust: JavascriptPreviewCell,
  go: JavascriptPreviewCell,
};
