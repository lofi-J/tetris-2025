import PauseIcon from "../../assets/pause.svg?react";
import PlayIcon from "../../assets/play.svg?react";
import { languageIconConfig } from "../../config/theme.config";
import { useTheme } from "../../context/theme-provider";
import { useGameStatusStore } from "../../game/game-status.store";
import { Button } from "../button";
import { TetrisMotion } from "./tetris.motion";

export const Topbar = () => {
  const { status, dispatch } = useGameStatusStore();
  const { theme } = useTheme();

  const SelectedThemeIcon = languageIconConfig[theme];

  const handleStart = () => {
    if (dispatch) {
      dispatch({ type: "SET_STATUS", status: "playing" });
    }
  };

  const togglePlayPause = () => {
    if (dispatch) {
      dispatch({
        type: "SET_STATUS",
        status: status === "playing" ? "paused" : "playing",
      });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 w-full max-w-[1200px] mx-auto h-13 rounded-full bg-[rgba(33,33,33,0.45)] z-50 px-8">
      <div className="flex items-center justify-between h-full">
        {/* Selected Theme Icon */}
        <div className="size-6">
          <SelectedThemeIcon />
        </div>

        {/* HOME (TETRIS)*/}
        <TetrisMotion />

        {/* Play/Pause Button */}
        {status === "idle" ? (
          <Button
            variant="transparent"
            type="button"
            onClick={handleStart}
            className="border border-orange"
          >
            <PlayIcon />
          </Button>
        ) : (
          <Button type="button" onClick={togglePlayPause}>
            {status === "playing" ? <PauseIcon /> : <PlayIcon />}
          </Button>
        )}
      </div>
    </header>
  );
};
