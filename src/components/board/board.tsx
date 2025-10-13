import { boardConfig } from "../../config/board.config";
import type { ProgrammingLanguage } from "../../context/theme-provider";
import type { Board } from "../../game/game.type";

type BoardProps = {
  theme: ProgrammingLanguage;
  board: Board;
};

export const BoardComponent = ({ theme, board }: BoardProps) => {
  const Component = boardConfig[theme];
  return <Component board={board} />;
};
