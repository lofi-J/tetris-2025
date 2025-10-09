import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
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
    element: <>game</>,
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
);
