import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import {
  makeStyles,
} from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import {grey} from '@material-ui/core/colors';

const greyColor = createMuiTheme({
  palette: {
    primary: {
      // joy
      main: grey[50],
    },
  },
});

const useStyles = makeStyles(() => ({
  // this group of buttons will be aligned to the right side
  toolbarButtons: {
    marginLeft: "auto",
  },
}));

const LogOutButton = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={greyColor}>
      <Button
        size="medium"
        variant="outlined"
        color="primary"
        className={classes.toolbarButtons}
        onClick={() => props.dispatch({ type: "LOGOUT" })}
      >
        Log Out
      </Button>
    </ThemeProvider>
  );
};

// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect()(LogOutButton);
