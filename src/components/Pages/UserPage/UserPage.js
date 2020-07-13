import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LogEmotionsButton from "../../Utilities/LogEmotionsButton/LogEmotionsButton";
import { Box, Button, Container, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import DateRangeIcon from "@material-ui/icons/DateRange";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  box: {
    display: "flex",
    flexDirection: "row", 
  },
  button: {
    marginLeft: "auto",
    textDecorationLine: "none",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  icon: {
    marginRight: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => {
  const { dispatch } = props;

  const classes = useStyles();

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    dispatch({ type: "FETCH_PIE_DATA" });
    dispatch({ type: "FETCH_RADAR_DATA" });
    dispatch({ type: "FETCH_CALENDAR_DATA" });
  }, [dispatch]);

  return (
    <div>
      <div>
        <center>
          <h2>How do you feel, {props.user.username}?</h2>
          <br />
          <LogEmotionsButton />
          <br />
        </center>
        <main className={classes.content}>
          {props.user.id && (
            <div className={classes.appBarSpacer}>
              <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Box className={classes.box}>
                        <DonutLargeIcon
                          fontSize="large"
                          className={classes.icon}
                        />
                        <Link to="/pie" className={classes.button}>
                          <Button>Emotion Pie</Button>
                        </Link>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Box className={classes.box}>
                        <TrackChangesIcon
                          fontSize="large"
                          className={classes.icon}
                        />
                        <Link to="/radar" className={classes.button}>
                          <Button>Emotional Radar</Button>
                        </Link>
                      </Box>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Box className={classes.box}>
                        <DateRangeIcon
                          fontSize="large"
                          className={classes.icon}
                        />
                        <Link to="/calendar" className={classes.button}>
                          <Button>Emotions to Date</Button>
                        </Link>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
