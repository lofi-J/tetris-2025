import { JavascriptBoard } from "../components/board/javascript-board";
import type { ProgrammingLanguage } from "../context/theme-provider";
import type { Board, Status } from "../game/game.type";

export interface BoardComponentProps {
  board: Board;
  gameStatus: Status;
  className?: string;
  style?: React.CSSProperties;
}

export const boardConfig: Record<
  ProgrammingLanguage,
  React.FC<BoardComponentProps>
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
