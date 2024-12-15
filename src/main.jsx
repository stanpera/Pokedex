// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./index.css";
import App from "./App.jsx";
import AppColorWrapper from "./components/shared/AppWrappers.jsx/AppColorWrapper.jsx";
import AppSizeWrapper from "./components/shared/AppWrappers.jsx/AppSizeWrapper.jsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(

    <ThemeProvider>
      <AppColorWrapper>
        <AppSizeWrapper>
            <SnackbarProvider>
            <App />
            </SnackbarProvider>
        </AppSizeWrapper>
      </AppColorWrapper>
    </ThemeProvider>

);
