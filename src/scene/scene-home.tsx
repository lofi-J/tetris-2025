import { Link } from "react-router-dom";
import Scene from "./scene";

export default function SceneHome() {
  return (
    <Scene>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="text-[20px] font-bold mt-4 font-silkscreen theme-color">
          Programming language
        </div>
        <div className="flex gap-5">
          <span className="text-[60px] font-bold font-silkscreen text-[#F16A50]">
            T
          </span>
          <span className="text-[60px] font-bold font-silkscreen text-[#FF8B3E]">
            E
          </span>
          <span className="text-[60px] font-bold font-silkscreen text-[#F0C000]">
            T
          </span>
          <span className="text-[60px] font-bold font-silkscreen text-[#4CC38A]">
            R
          </span>
          <span className="text-[60px] font-bold font-silkscreen text-[#52A9FF]">
            I
          </span>
          <span className="text-[60px] font-bold font-silkscreen text-[#D864D8]">
            S
          </span>
        </div>

        {/* select theme */}
        <div></div>

        {/* Start Button */}
        <Link to="/game" className="bg-transparent mt-[80px]">
          <button type="button">Start Game</button>
        </Link>
      </div>
    </Scene>
  );
}
