// ----- Start of Imports -----
// React imports
import React, { useState } from "react";
// React Redux import
import { connect } from "react-redux";
// React Router DOM import
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// Material-ui core imports:
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// Material-ui core/styles imports:
import makeStyles from "@material-ui/core/styles/makeStyles";
// Material-ui icons imports:
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// Material-ui lab imports:
import MuiAlert from "@material-ui/lab/Alert";
// Component imports
import HomePageContent from "../HomePageContent/HomePageContent";
// ----- End of Imports -----

// ----- Start of Material-ui Alert function -----
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// ----- End of Material-ui Alert function -----

// ----- Start of custom Material-ui styles for page -----
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
// ----- End of custom Material-ui styles for page -----

// ~ * ~ ----------> This is the start of the SignUpPage component <---------- ~ * ~ \\
const SignUpPage = (props) => {
  // MUI styles variable
  const classes = useStyles();

  // History hook
  const history = useHistory();

  // ----- Start of Local state -----
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [openState, setOpenState] = useState({
    horizontal: "center",
    open: false,
    vertical: "top",
  });
  const { open } = openState;
  // ----- End of Local state -----

  // Function to handle click that changes state and will render alert
  const handleClick = (newState) => {
    setOpenState({ open: true, ...newState });
  };

  // Function handles the click away that changes state and will not render alert
  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenState({ ...openState, open: false });
  };

  // Function handles the change for User Name
  const handleInputChangeForUserName = (e) => {
    setUserName(e.target.value);
  };

  // Function handles the change for Password
  const handleInputChangeForPassword = (e) => {
    setPassword(e.target.value);
  };

  // Function is the login event handler
  const registerUser = (event) => {
    event.preventDefault();
    if (
      username !== "" &&
      password !== "" &&
      username !== null &&
      password !== null &&
      username !== undefined &&
      password !== undefined
    ) {
      props.dispatch({
        type: "REGISTER",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
      handleClick();
    }
    history.push("/home");
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {props.errors.registrationMessage && (
        <Snackbar autoHideDuration={5000} onClose={handleClose} open={open}>
          <Alert onClose={handleClose} severity="error">
            {props.errors.registrationMessage}
          </Alert>
        </Snackbar>
      )}
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <HomePageContent />
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(event) => handleInputChangeForUserName(event)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => handleInputChangeForPassword(event)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={registerUser}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="signin">
                  <Typography
                    variant="body2"
                    onClick={() => {
                      props.dispatch({ type: "SET_TO_REGISTER_MODE" });
                    }}
                  >
                    Already have an account? Sign In"
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
// ~ * ~ ----------> This is the start of the SignUpPage component <---------- ~ * ~ \\

// ----- Start of Redux Store mapStateToProps function -----
const mapStateToProps = (state) => ({
  errors: state.errors,
});
// ----- End of Redux Store mapStateToProps function -----

export default connect(mapStateToProps)(SignUpPage);
