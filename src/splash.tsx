import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/frieren_javascript.jpg";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const now = new Date();
    const lastSplashAt = localStorage.getItem("splash_at");
    if (lastSplashAt) {
      const lastSplashAtDate = new Date(lastSplashAt);
      const diff = now.getTime() - lastSplashAtDate.getTime();

      // 1 hour
      if (diff < 1000 * 60 * 60 * 1) {
        localStorage.setItem("splash_at", now.toISOString());
        navigate("/home");
      }

      setTimeout(() => {
        navigate("/home");
      }, 3000);
    }
  }, []);

  return (
    <main className="min-h-screen min-w-screen bg-black flex items-center justify-center">
      <img
        src={logo}
        alt="splash image"
        className="aspect-auto object-contain"
      />
    </main>
  );
}

export default Splash;
