import { useNavigate } from "react-router-dom";

export const Topbar = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <header className="fixed top-4 left-0 right-0 w-full max-w-[1200px] mx-auto h-13 rounded-full bg-[rgba(33,33,33,0.65)]">
      <div>
        <button type="button" onClick={goHome}>
          Home
        </button>
        {/* <PlayButton /> */}
      </div>
    </header>
  );
};
