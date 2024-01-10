import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
//allows mui to work
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./app/store";

//call theme with createTheme()
const theme = createTheme({});
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
