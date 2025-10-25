import { PauseIcon, PlayIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useGameStatusStore } from "../../game/game-status.store";
import { Button } from "../button";
import { Loading } from "../loading";
import { LanguageMotion } from "./language.motion";
import { TetrisMotion } from "./tetris.motion";

export const Topbar = () => {
  const { status, dispatch } = useGameStatusStore();
  const { pathname } = useLocation();

  const togglePlayPause = () => {
    if (dispatch) {
      dispatch({
        type: "SET_STATUS",
        status: status === "playing" ? "paused" : "playing",
      });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 w-full max-w-[800px] mx-auto h-13 rounded-full bg-[rgba(33,33,33,0.45)] z-50 px-8">
      <div className="flex items-center justify-between h-full">
        {/* Selected Theme Icon */}
        <LanguageMotion />

        {/* HOME (TETRIS)*/}
        <TetrisMotion />

        {/* Loading Animation for Home Page */}
        {pathname === "/" && <Loading size={10} />}

        {/* Play/Pause Button */}
        {pathname === "/game" && (
          <Button
            type="button"
            onClick={togglePlayPause}
            disabled={pathname !== "/game"}
          >
            {status === "playing" ? <PauseIcon /> : <PlayIcon />}
          </Button>
        )}
      </div>
    </header>
  );
};
