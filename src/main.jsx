import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import App from "./App.jsx";
import AppWrapper from "./components/AppWrapper.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
      <NotificationProvider>
        <App />
      </NotificationProvider>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
