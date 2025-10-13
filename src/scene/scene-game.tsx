import { useEffect, useReducer } from "react";
import { BoardComponent } from "../components/board/board";
import { Preview } from "../components/preview";
import { useTheme } from "../context/theme-provider";
import { gameReducer, initialState } from "../game/game.state";
import { createRenderBoard } from "../game/game.util";

export default function SceneGame() {
  const { theme } = useTheme();
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // useEffect(() => {
  //   if (!state.isGameStarted) return;

  //   const level = state.level;
  //   const dropSpeed = 1000 - level * 100;

  //   const interval = setInterval(() => {
  //     dispatch({ type: "MOVE_DOWN" });
  //   }, dropSpeed);

  //   return () => clearInterval(interval);
  // }, [state.level, state.isGameStarted]);

  useEffect(() => {
    dispatch({ type: "START_GAME" });
  }, []);

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
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!state.isGameStarted) return <>loading...</>;

  return (
    <div className="w-screen h-screen">
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
          <div className="flex flex-col gap-2">
            <strong className="text-lg font-semibold mb-2">Next</strong>
            <div className="border border-white flex flex-col gap-2">
              {state.nextTetrominos.map((tetromino, index) => (
                <Preview key={`next-${index}`} tetromino={tetromino} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
