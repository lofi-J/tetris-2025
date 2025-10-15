import { Link } from "react-router-dom";
import PauseIcon from "../assets/pause.svg?react";
import PlayIcon from "../assets/play.svg?react";
import { languageIconConfig } from "../config/theme.config";
import { useTheme } from "../context/theme-provider";
import { useGameStatusStore } from "../game/game-status.store";
import { Button } from "./button";

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
    <header className="fixed top-4 left-0 right-0 w-full max-w-[1200px] mx-auto h-13 rounded-full bg-[rgba(33,33,33,0.65)] z-50 px-8">
      <div className="flex items-center justify-between h-full">
        {/* Selected Theme Icon */}
        <div className="size-[30px]">
          <SelectedThemeIcon />
        </div>

        {/* HOME (TETRIS)*/}
        <Link to="/">
          <div className="font-silkscreen">TESTRIS</div>
        </Link>

        {status === "idle" ? (
          <Button type="button" onClick={handleStart}>
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
