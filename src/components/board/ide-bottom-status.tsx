import { PauseIcon, PlayIcon } from "lucide-react";
import type { Status } from "../../game/game.type";

type IdeBottomStatusProps = {
  status: Status;
};

export const IdeBottomStatus = ({ status }: IdeBottomStatusProps) => {
  switch (status) {
    case "playing":
      return (
        <div className="flex items-center gap-1">
          <PlayIcon className="text-green-400" size={12} />
          <span className="text-[9px] font-mono text-green-400">
            Running...
          </span>
        </div>
      );
    case "paused":
      return (
        <div className="flex items-center gap-1">
          <PauseIcon className="text-yellow-400" size={12} />
          <span className="text-[9px] font-mono text-yellow-400">
            Paused...
          </span>
        </div>
      );
    default:
      return null;
  }
};
