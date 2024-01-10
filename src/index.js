import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//allows mui to work
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./components/App";

const theme = createTheme({});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,

  document.getElementById("root")
);
