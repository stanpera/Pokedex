import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LoginProvider } from "./context/LoginContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </NotificationProvider>
  </StrictMode>
);
