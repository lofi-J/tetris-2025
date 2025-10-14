import { useNavigate } from "react-router-dom";
import PlayIcon from "../assets/play.svg?react";
import { useGameStatusStore } from "../game/game-status.store";
import { Button } from "./button";

export const Topbar = () => {
  const navigate = useNavigate();
  const { status, dispatch } = useGameStatusStore();
  const goHome = () => navigate("/");

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
    <header className="fixed top-4 left-0 right-0 w-full max-w-[1200px] mx-auto h-13 rounded-full bg-[rgba(33,33,33,0.65)]">
      <div>
        <Button type="button" onClick={goHome}>
          Home
        </Button>

        <span>Status: {status}</span>

        {status === "idle" ? (
          <Button type="button" onClick={handleStart}>
            <PlayIcon />
          </Button>
        ) : (
          <Button type="button" onClick={togglePlayPause}>
            {status === "playing" ? "Pause" : "Resume"}
          </Button>
        )}
      </div>
    </header>
  );
};
