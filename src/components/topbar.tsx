import { useNavigate } from "react-router-dom";
import { useGameStatusStore } from "../game/game-status.store";

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
        <button type="button" onClick={goHome}>
          Home
        </button>

        <span>Status: {status}</span>

        {status === "idle" ? (
          <button type="button" onClick={handleStart}>
            Play
          </button>
        ) : (
          <button type="button" onClick={togglePlayPause}>
            {status === "playing" ? "Pause" : "Resume"}
          </button>
        )}
      </div>
    </header>
  );
};
