import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { BoardComponent } from "../components/board/board";
import { Level } from "../components/board/level";
import { Score } from "../components/board/score";
import { Timer } from "../components/board/timer";
import { Preview } from "../components/preview";
import { useTheme } from "../context/theme-provider";
import { useGameSettingStore } from "../game/game-setting.store";
import { useGameStatusStore } from "../game/game-status.store";
import { gameReducer, initialState } from "../game/game.state";
import { createRenderBoard } from "../game/game.util";
import Scene from "./scene";

export default function SceneGame() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const gameStatus = state.status;
  const setDispatch = useGameStatusStore((state) => state.setDispatch);
  const previewCellSize = useGameSettingStore((state) => state.previewCellSize);

  // setDispatch for topbar
  useEffect(() => {
    setDispatch(dispatch);
  }, [setDispatch]);

  // Reducer → Zustand 단방향 동기화 (동기화의 필요성: setDispatch를 통한 state변경으로 store 의 status가 변경되지 않기 때문)
  useEffect(() => {
    useGameStatusStore.setState({ status: gameStatus });
  }, [gameStatus]);

  useEffect(() => {
    if (gameStatus !== "playing") return;

    const level = state.level;
    const dropSpeed = 1000 - level * 100;

    const interval = setInterval(() => {
      dispatch({ type: "MOVE_DOWN" });
    }, dropSpeed);

    return () => clearInterval(interval);
  }, [state.level, gameStatus]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          dispatch({ type: "MOVE_LEFT" });
          break;
        case "ArrowRight":
          event.preventDefault();
          dispatch({ type: "MOVE_RIGHT" });
          break;
        case "ArrowDown":
          event.preventDefault();
          dispatch({ type: "MOVE_DOWN" });
          break;
        case "ArrowUp":
          event.preventDefault();
          dispatch({ type: "ROTATE" });
          break;
        case " ": // spacebar
          event.preventDefault();
          dispatch({ type: "HARD_DROP" });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (gameStatus === "gameover") {
    // what the hell
    setTimeout(() => {
      navigate("/game-over", {
        state: {
          level: state.level,
          score: state.score,
        },
      });
    });
  }

  return (
    <Scene>
      <div className="flex justify-center items-center h-full gap-4">
        <div className="flex gap-8 items-stretch">
          <BoardComponent
            board={createRenderBoard(
              state.board,
              state.tetromino,
              state.position,
            )}
            gameStatus={gameStatus}
            theme={theme}
          />
          <div className="flex flex-col items-start justify-between flex-1 min-w-[130px]">
            {/* Next Tetromino */}
            <div
              className="flex flex-col items-start gap-2"
              style={{
                minWidth: `${previewCellSize * 4}px`,
              }}
            >
              {state.nextTetrominos.peekAll().map((tetromino, index) => (
                <Preview key={`next-${index}`} tetromino={tetromino} />
              ))}
            </div>
            {/* Stats Panel */}
            <div className="flex flex-col gap-3">
              {/* Time */}
              <Timer status={gameStatus} />
              {/* Level */}
              <Level level={state.level} linesCleared={state.linesCleared} />
              {/* Score */}
              <Score score={state.score} />
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
