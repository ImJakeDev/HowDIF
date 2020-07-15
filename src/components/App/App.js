// React
import React from "react";
//Material-ui core imports:
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
//Material-ui style imports:
import ThemeProvider from "@material-ui/styles/ThemeProvider";
//Material-ui core/colors imports:
// https://material-ui.com/customization/color/#color
import amber from "@material-ui/core/colors/amber";
import blueGrey from "@material-ui/core/colors/blueGrey";
// Component imports
import Content from "../Layout/Content/Content";

// Main Material-ui theme for colors
const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      dark: blueGrey[700],
      light: blueGrey[100],
    },
    secondary: {
      main: amber[700],
      ark: amber[900],
      light: amber[300],
    },
  },
});

// App component holds all the components
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
