import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "@mui/material";

// MUI Theme Overrides
import theme from "./styles/muiTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
