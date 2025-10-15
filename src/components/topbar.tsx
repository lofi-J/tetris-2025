import clsx from "clsx";
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
    <header className="fixed top-4 left-0 right-0 w-full max-w-[1200px] mx-auto h-13 rounded-full bg-[rgba(33,33,33,0.45)] z-50 px-8">
      <div className="flex items-center justify-between h-full">
        {/* Selected Theme Icon */}
        <div className="size-6">
          <SelectedThemeIcon />
        </div>

        {/* HOME (TETRIS)*/}
        <Link to="/" className="space-x-1">
          <Char char="T" className="text-tomato" />
          <Char char="E" className="text-orange" />
          <Char char="T" className="text-tomato" />
          <Char char="R" className="text-green" />
          <Char char="I" className="text-blue" />
          <Char char="S" className="text-purple" />
        </Link>

        {/* Play/Pause Button */}
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

const Char = ({ char, className }: { char: string; className: string }) => {
  return (
    <span className={clsx("text-xl font-bold font-silkscreen", className)}>
      {char}
    </span>
  );
};
