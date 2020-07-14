// React
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// Components
import Content from "../Layout/Content/Content";

// https://material-ui.com/customization/color/#color
import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey,
} from "@material-ui/core/colors";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: pink[200],
    },
    error: {
      main: deepOrange[400],
    },
    warning: {
      main: orange[300],
    },
    info: {
      main: grey[200],
    },
    success: {
      main: lightGreen[300],
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
