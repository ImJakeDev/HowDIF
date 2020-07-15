import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    marginTop: "2vh",
  },
});

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => {
  const classes = useStyles();

  const history = useHistory();

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
              About HowDIF
            </Typography>
            <Button variant="contained" onClick={() => history.push("/home")}>
              Back
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1" gutterBottom>
              HowDIF is a tool that helps you understand yourself and helps
              identify the emotions you are feeling. Your feelings are valid and
              you deserve to understand them better.
            </Typography>
            <Typography variant="body1" gutterBottom>
              HowDIF provides the process to dig deeper into your emotions, and
              the data to analyze these emotions. With this app the user will
              explore their emotions deeper and it will empower them to
              understand their emotions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutPage;
