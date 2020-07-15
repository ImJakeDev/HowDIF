// React
import React from 'react';
// React Router DOM imports
import { Link } from "react-router-dom";
// React Redux imports
import { connect } from 'react-redux';
// Component imports
import LogOutButton from '../../Utilities/LogOutButton/LogOutButton';
//Material-ui core imports:
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
//Material-ui core/styles imports:
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
//Material-ui icons imports:
import SettingsIcon from "@material-ui/icons/Settings";
import HelpSharpIcon from "@material-ui/icons/HelpSharp";
//Material-ui style imports:
import ThemeProvider from "@material-ui/styles/ThemeProvider";
//Material-ui core/colors imports:
import grey from "@material-ui/core/colors/grey";

const greyColor = createMuiTheme({
  palette: {
    primary: {
      // joy
      main: grey[50],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbarTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#fafafa",
    textDecorationLine: "none",
  },
  menu: {
    marginLeft: "auto",
  },
  link: {
    textDecorationLine: "none",
  },
  settings: {
    marginLeft: "1vh",
  },
}));

const Nav = (props) => {
  const classes = useStyles();
  return (
    <>
      {/* <div className="nav"> */}
      <AppBar position="relative">
        <Toolbar>
          <HelpSharpIcon color="secondary" className={classes.icon} />
          <Link to="/home" className={classes.toolbarTitle}>
            HowDIF
          </Link>
          <nav className={classes.menu}>
            <ThemeProvider theme={greyColor}>
              <Link to="/about" className={classes.link}>
                <Button color="primary" size="small">
                  About
                </Button>
              </Link>
            </ThemeProvider>
          </nav>
          {props.user.id && (
            <>
              <LogOutButton />{" "}
              <ThemeProvider theme={greyColor}>
                <Link to="/settings" className={classes.settings}>
                  <IconButton aria-label="settings" color="primary">
                    <SettingsIcon />
                  </IconButton>
                </Link>
              </ThemeProvider>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* <Link to="/home">
          <Typography variant="h6" color="inherit" noWrap>
            HowDIF
          </Typography>
        </Link> */}
      {/* <div className="nav-right"> */}
      {/* <Link className="nav-link" to="/home"> */}
      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {/* {props.user.id ? "Home" : "Login / Register"} */}
      {/* </Link> */}
      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link>
      <Link className="nav-link" to="/landing">
        Landing
      </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {/* {props.user.id && (
          <> */}
      {/* <Link className="nav-link" to="/info">
            Info Page
          </Link> */}
      {/* <LogOutButton className="nav-link" />
          </>
        )}
      </div> */}
      {/* </div> */}
    </>
  );
} 

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
