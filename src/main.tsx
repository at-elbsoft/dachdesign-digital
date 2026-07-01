import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initGlobalClickTracking } from "./lib/analytics";

initGlobalClickTracking();

createRoot(document.getElementById("root")!).render(<App />);
