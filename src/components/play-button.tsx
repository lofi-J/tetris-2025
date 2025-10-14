import { useLocation } from "react-router-dom";

type PlayButtonProps = {
  onClick: () => void;
};

export const PlayButton = ({ onClick }: PlayButtonProps) => {
  const pathname = useLocation();
  const isGamePage = pathname.pathname === "/game";

  return (
    <button type="button" onClick={onClick} disabled={!isGamePage}>
      {/* {state.isGameStarted ? "Pause" : "Play"} */}
    </button>
  );
};
