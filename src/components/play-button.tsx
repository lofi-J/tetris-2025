import { useLocation } from "react-router-dom";
import type { GameStateStore } from "../scene/scene-game";

type PlayButtonProps = {
  gameState: GameStateStore;
};

export const PlayButton = ({ gameState }: PlayButtonProps) => {
  const pathname = useLocation();
  const isGamePage = pathname.pathname === "/game";

  const handleClick = () => {
    if (gameState.isGameStarted) {
      gameState.setIsGameStarted(false);
    }
  };

  return (
    <button type="button" onClick={handleClick} disabled={!isGamePage}>
      {gameState.isGameStarted ? "Pause" : "Play"}
    </button>
  );
};
