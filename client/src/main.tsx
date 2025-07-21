import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter } from "react-router";
import SketchlingzApp from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SketchlingzApp />
  </BrowserRouter>
);
