import { JavascriptBoard } from "../components/board/javascript-board";
import type { ProgrammingLanguage } from "../context/theme-provider";
import type { Board } from "../game/game.type";

export const boardConfig: Record<
  ProgrammingLanguage,
  React.FC<{ board: Board }>
> = {
  javascript: JavascriptBoard,
  typescript: JavascriptBoard,
  python: JavascriptBoard,
  java: JavascriptBoard,
  "c++": JavascriptBoard,
  "c#": JavascriptBoard,
  ruby: JavascriptBoard,
  swift: JavascriptBoard,
  rust: JavascriptBoard,
  go: JavascriptBoard,
};
