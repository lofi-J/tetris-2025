import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { BoardComponent } from "../components/board/board";
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

  // increase level
  useEffect(() => {
    if (state.score >= 3000 && state.level === 1) {
      dispatch({ type: "INCREASE_LEVEL" });
    }
    if (state.score >= 10000 && state.level === 2) {
      dispatch({ type: "INCREASE_LEVEL" });
    }
    if (state.score >= 15000 && state.level === 3) {
      dispatch({ type: "INCREASE_LEVEL" });
    }
    if (state.score >= 20000 && state.level === 4) {
      dispatch({ type: "INCREASE_LEVEL" });
    }
    if (state.score >= 25000 && state.level === 5) {
      dispatch({ type: "INCREASE_LEVEL" });
    }
  }, [state.score, state.level]);

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
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <div className="flex gap-8 items-start">
          <BoardComponent
            board={createRenderBoard(
              state.board,
              state.tetromino,
              state.position,
            )}
            gameStatus={gameStatus}
            theme={theme}
          />
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
            {/* Score */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-xl overflow-hidden min-w-[160px]">
              {/* Header */}
              <div className="h-7 bg-gradient-to-r from-gray-800/95 via-gray-750/95 to-gray-800/95 border-b border-gray-700/80 flex items-center px-3 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-gray-400">
                  score.js
                </span>
              </div>
              {/* Content */}
              <div className="p-4">
                <div className="font-mono text-xs text-gray-500 mb-1">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">score</span>{" "}
                  <span className="text-gray-500">=</span>
                </div>
                <div className="font-mono text-3xl font-bold text-yellow-400 pl-4">
                  {state.score.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Level */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-xl overflow-hidden min-w-[160px]">
              {/* Header */}
              <div className="h-7 bg-gradient-to-r from-gray-800/95 via-gray-750/95 to-gray-800/95 border-b border-gray-700/80 flex items-center px-3 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-gray-400">
                  level.js
                </span>
              </div>
              {/* Content */}
              <div className="p-4">
                <div className="font-mono text-xs text-gray-500 mb-1">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">level</span>{" "}
                  <span className="text-gray-500">=</span>
                </div>
                <div className="font-mono text-3xl font-bold text-green-400 pl-4 flex items-baseline gap-1">
                  {state.level}
                  <span className="text-xs text-gray-500">/6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
}
