import { useNavigate } from "react-router-dom";

export default function SceneGameOver() {
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/game");
  };

  return (
    <div className="min-h-screen min-w-screen select-none">
      <h1 className="text-[50px] font-extrabold text-white">GAME OVER</h1>
      <button type="button" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  );
}
