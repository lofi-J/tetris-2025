import { boardConfig } from "../../config/board.config";
import type { ProgrammingLanguage } from "../../context/theme-provider";
import { useGameSettingStore } from "../../game/game-setting.store";
import type { Board, Status } from "../../game/game.type";

type BoardProps = {
  theme: ProgrammingLanguage;
  board: Board;
  gameStatus: Status;
};

export const BoardComponent = ({ theme, board, gameStatus }: BoardProps) => {
  const Component = boardConfig[theme];
  const cellSize = useGameSettingStore((state) => state.cellSize);

  const style = {
    width: `${cellSize}px`,
    height: `${cellSize}px`,
  };
  return <Component board={board} gameStatus={gameStatus} style={style} />;
};
