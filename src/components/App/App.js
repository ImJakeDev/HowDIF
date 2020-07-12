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

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[300],
    },
    secondary: {
      main: grey[50],
    },
    anger: {
      main: red[500],
    },
    fear: {
      main: teal[500],
    },
    sadness: {
      main: blue[500],
    },
    disgust: {
      main: pink[500],
    },
    surprise: {
      main: lightBlue[500],
    },
    anticipation: {
      main: orange[500],
    },
    trust: {
      main: lime[500],
    },
    joy: {
      main: yellow[500],
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
