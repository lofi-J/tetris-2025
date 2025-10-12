import { useEffect, useReducer } from "react";
import { BoardComponent } from "../components/board/board";
import { Preview } from "../components/preview";
import { useTheme } from "../context/theme-provider";
import { gameReducer, initialState } from "../game/game.state";

export default function SceneGame() {
  const { theme } = useTheme();
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    const level = state.level;
    const dropSpeed = 1000 - level * 100;

    const interval = setInterval(() => {
      dispatch({ type: "MOVE_DOWN" });
    }, dropSpeed);

    return () => clearInterval(interval);
  }, [state.level]);

  useEffect(() => {
    dispatch({ type: "START_GAME" });
  }, []);

  if (!state.isGameStarted) return <>loading...</>;

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <h1 className="text-2xl font-bold">{theme}</h1>
        <div className="flex gap-8 items-start">
          <BoardComponent board={state.board} theme={theme} />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold mb-2">Next</h2>
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
