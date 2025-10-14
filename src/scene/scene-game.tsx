import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { BoardComponent } from "../components/board/board";
import { Preview } from "../components/preview";
import { useTheme } from "../context/theme-provider";
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
          dispatch({ type: "MOVE_LEFT" });
          break;
        case "ArrowRight":
          dispatch({ type: "MOVE_RIGHT" });
          break;
        case "ArrowDown":
          dispatch({ type: "MOVE_DOWN" });
          break;
        case "ArrowUp":
          dispatch({ type: "ROTATE" });
          break;
        case " ": // spacebar
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
        <h1 className="text-2xl font-bold">{theme}</h1>
        <div className="flex gap-8 items-start">
          <BoardComponent
            board={createRenderBoard(
              state.board,
              state.tetromino,
              state.position,
            )}
            theme={theme}
          />
          {/* Next Tetromino */}
          <div className="flex flex-col gap-2">
            <strong className="text-lg font-semibold mb-2">Next</strong>
            <div className="border border-white flex flex-col gap-2">
              {state.nextTetrominos.peekAll().map((tetromino, index) => (
                <Preview key={`next-${index}`} tetromino={tetromino} />
              ))}
            </div>
          </div>

          {/* Score */}
          <div className="flex flex-col gap-2">
            <strong className="text-lg font-semibold mb-2">Score</strong>
            <p className="text-lg font-semibold">{state.score}</p>
          </div>

          {/* Level */}
          <div className="flex flex-col gap-2">
            <strong className="text-lg font-semibold mb-2">Level</strong>
            <p className="text-lg font-semibold">{state.level}</p>
          </div>
        </div>
      </div>
    </Scene>
  );
}
