import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginTop: "2vh",
  },
  paper: {
    maxWidth: "90vh",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const SettingsPage = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const deleteAccount = () => {
    props.dispatch({ type: "DELETE_USER" });
    props.dispatch({ type: "LOGOUT" });
    history.push("/home");
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={8}>
            <Typography variant="h3" gutterBottom>
              User Settings
            </Typography>
            <Button variant="contained" onClick={() => history.push("/home")}>
              Back
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <Box className={classes.box}>
                <Button
                  startIcon={<DeleteForeverIcon />}
                  onClick={() => deleteAccount()}
                >
                  Delete Account
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(SettingsPage);
