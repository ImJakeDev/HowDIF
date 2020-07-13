import React from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MobileStepper,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import {
  red,
  deepPurple,
  blue,
  green,
  lightGreen,
  lime,
  yellow,
  orange,
} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  emotionButtons: {
    padding: theme.spacing(1),
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
}));

const anger = createMuiTheme({
  palette: {
    primary: {
      // anger
      main: red[300],
    },
  },
});

const fear = createMuiTheme({
  palette: {
    primary: {
      // fear
      main: lightGreen[300],
    },
  },
});

const sadness = createMuiTheme({
  palette: {
    primary: {
      // sadness
      main: blue[300],
    },
  },
});

const disgust = createMuiTheme({
  palette: {
    primary: {
      // disgust
      main: deepPurple[300],
    },
  },
});

const surprise = createMuiTheme({
  palette: {
    primary: {
      // surprise
      main: green[300],
    },
  },
});

const anticipation = createMuiTheme({
  palette: {
    primary: {
      // anticipation
      main: orange[300],
    },
  },
});

const trust = createMuiTheme({
  palette: {
    primary: {
      // trust
      main: lime[300],
    },
  },
});

const joy = createMuiTheme({
  palette: {
    primary: {
      // joy
      main: yellow[300],
    },
  },
});

const LogStage1 = (props) => {
  const classes = useStyles();

  const handleClickForPrimEmo = (param) => {
    props.setPrimaryEmotion(param);
    console.log(param);
  };

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      <DialogTitle id="form-dialog-title">
        Select a Primary Emotion you are feeling.
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <ThemeProvider theme={anger}>
              <Button
                onClick={() => handleClickForPrimEmo("anger")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                anger
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={3}>
            <ThemeProvider theme={anticipation}>
              <Button
                onClick={() => handleClickForPrimEmo("anticipation")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                anticipation
              </Button>
            </ThemeProvider>
          </Grid>

          <Grid item xs={3}>
            <ThemeProvider theme={joy}>
              <Button
                onClick={() => handleClickForPrimEmo("joy")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                joy
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={3}>
            <ThemeProvider theme={trust}>
              <Button
                onClick={() => handleClickForPrimEmo("trust")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                trust
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={3}>
            <ThemeProvider theme={fear}>
              <Button
                onClick={() => handleClickForPrimEmo("fear")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                fear
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={3}>
            <ThemeProvider theme={surprise}>
              <Button
                onClick={() => handleClickForPrimEmo("surprise")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                surprise
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={3}>
            <ThemeProvider theme={sadness}>
              <Button
                onClick={() => handleClickForPrimEmo("sadness")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                sadness
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={3}>
            <ThemeProvider theme={disgust}>
              <Button
                onClick={() => handleClickForPrimEmo("disgust")}
                className={classes.emotionButtons}
                size="large"
                variant="contained"
                color="primary"
              >
                disgust
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
        <DialogContentText>{props.primaryEmotion}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <MobileStepper
          variant="progress"
          steps={4}
          position="static"
          activeStep={props.activeStep}
          className={props.classes.root}
          nextButton={
            <Button
              size="small"
              onClick={props.nextStage}
              disabled={props.activeStep === 4}
            >
              Next
              {props.theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={props.handleClose}
              disabled={props.activeStep === 1}
            >
              <KeyboardArrowLeft />
              Cancel
            </Button>
          }
        />
      </DialogActions>
      {/* ----- This is the end of the Dialog Area ----- */}
    </div>
  );
};

export default connect()(LogStage1);
