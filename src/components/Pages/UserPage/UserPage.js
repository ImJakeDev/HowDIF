import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LogEmotionsButton from "../../Utilities/LogEmotionsButton/LogEmotionsButton";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TableChartIcon from "@material-ui/icons/TableChart";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    margin: "auto",
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
    maxWidth: "90vh",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  logbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    margin: "1vh",
  },
  marginBottom: {
    marginBottom: "1em",
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
    dispatch({ type: "FETCH_TABLE_DATA" });
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <main className={classes.content}>
          <div className={classes.appBarSpacer}>
            <Container maxWidth="sm" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <Box className={classes.logbox}>
                      <Typography variant="h4" className={classes.marginBottom}>
                        How do you feel, {props.user.username}?
                      </Typography>
                      <LogEmotionsButton />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </div>
          {props.user.id && (
            <div className={classes.appBarSpacer}>
              <Container maxWidth="sm" className={classes.container}>
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
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Box className={classes.box}>
                        <TableChartIcon
                          fontSize="large"
                          className={classes.icon}
                        />
                        <Link to="/table" className={classes.button}>
                          <Button>Emotions Table</Button>
                        </Link>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </div>
          )}
        </main>
      </Container>
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
