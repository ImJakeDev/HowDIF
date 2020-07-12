import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../../Utilities/LogOutButton/LogOutButton';
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HelpSharpIcon from "@material-ui/icons/HelpSharp";
// import './Nav.css';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbarTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#fafafa",
    textDecorationLine: "none",
  }
}));

const Nav = (props) => {
  const classes = useStyles();
  return (
    <>
      {/* <div className="nav"> */}
      <AppBar position="relative">
        <Toolbar>
          <HelpSharpIcon className={classes.icon} />
          <Link to="/home" className={classes.toolbarTitle}>
            HowDIF
          </Link>
          {props.user.id && (
              <LogOutButton />
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
