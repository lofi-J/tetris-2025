import { Link } from "react-router-dom";

export default function SceneHome() {
  return (
    <div className="min-h-screen min-w-screen select-none">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-[100px] font-extrabold text-white">TETRIS</h1>
        <h2 className="text-xl font-semibold mt-4 font-silkscreen">
          Programming language
        </h2>

        {/* select theme */}
        <div></div>

        {/* Start Button */}
        <Link to="/game" className="bg-transparent mt-[80px]">
          <button type="button">Start Game</button>
        </Link>
      </div>
    </div>
  );
}
