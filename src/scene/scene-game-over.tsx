import { useLocation, useNavigate } from "react-router-dom";

export default function SceneGameOver() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const level = typeof state.level === "number" ? state.level : 0;
  const score = typeof state.score === "number" ? state.score : 0;

  const handlePlayAgain = () => {
    navigate("/game");
  };

  return (
    <div className="min-h-screen min-w-screen select-none">
      <h1 className="text-[50px] font-extrabold text-white">GAME OVER</h1>
      <p className="text-xl font-semibold mt-4 font-silkscreen">
        Level: {level}
      </p>
      <p className="text-xl font-semibold mt-4 font-silkscreen">
        Score: {score}
      </p>
      <button type="button" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
}
