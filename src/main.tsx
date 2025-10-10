import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./context/theme-provider.tsx";
import "./global.css";
import SceneGame from "./scene/scene-game.tsx";
import SceneHome from "./scene/scene-home.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <SceneHome />,
  },
  {
    path: "/game",
    element: <SceneGame />,
  },
]);

createRoot(rootElement).render(
  <ThemeProvider>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </ThemeProvider>,
);
