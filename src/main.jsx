import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import App from "./App.jsx";
import AppColorWrapper from "./components/shared/AppWrappers.jsx/AppColorWrapper.jsx";
import AppSizeWrapper from "./components/shared/AppWrappers.jsx/AppSizeWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppColorWrapper>
        <AppSizeWrapper>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </AppSizeWrapper>
      </AppColorWrapper>
    </ThemeProvider>
  </StrictMode>
);
