import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
// import { ThemeProvider } from "@material-ui/styles";

// import {grey} from '@material-ui/core/colors';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: grey[50],
//     },
//     secondary: {
//       main: "#00bcd4",
//     },
//   },
// });

const useStyles = makeStyles((theme) => ({
  // this group of buttons will be aligned to the right side
  toolbarButtons: {
    marginLeft: "auto",
  },
}));

const LogOutButton = (props) => {
  const classes = useStyles();
  return (
    // <ThemeProvider theme={theme}>
    <Button
      size="medium"
      variant="outlined"
      color="secondary"
      className={classes.toolbarButtons}
      onClick={() => props.dispatch({ type: "LOGOUT" })}
    >
      Log Out
    </Button>
    // </ThemeProvider>
  );
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
