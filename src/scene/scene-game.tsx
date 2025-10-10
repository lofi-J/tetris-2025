import { useNavigate } from "react-router-dom";
import { JavascriptBoard } from "../components/board";
import { useTheme } from "../context/theme-provider";
import { useBoard } from "../hooks/use-board";
import { useController } from "../hooks/use-controller";
import { useStatus } from "../hooks/use-status";

export default function SceneGame() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  // game logic
  const { board, setBoard, score } = useBoard();
  const { isGameOver, level } = useStatus(board, score);
  useController(board, setBoard);

  if (isGameOver) {
    alert(`Game Over! Your score is ${score}`);
    navigate("/gameover", { state: { score } });
  }

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-2xl font-bold">{theme}</h1>
        <h3 className="text-2xl font-bold">Level: {level}</h3>
        <JavascriptBoard board={board} />
      </div>
    </div>
  );
}
