import React, { useEffect } from "react";
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

const LogStage1 = (props) => {
  const classes = useStyles();

  const handleClickForEmo = (param) => {
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
            <Button
              onClick={() => handleClickForEmo("anger")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              anger
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleClickForEmo("sadness")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              sadness
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleClickForEmo("fear")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              fear
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleClickForEmo("disgust")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              disgust
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleClickForEmo("surprise")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              surprise
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleClickForEmo("anticipation")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              anticipation
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleClickForEmo("trust")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              trust
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => handleClickForEmo("joy")}
              className={classes.emotionButtons}
              variant="contained"
              color="primary"
            >
              joy
            </Button>
          </Grid>
        </Grid>
        <DialogContentText>{props.primaryEmotion}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <MobileStepper
          variant="progress"
          steps={3}
          position="static"
          activeStep={props.activeStep}
          className={props.classes.root}
          nextButton={
            <Button
              size="small"
              onClick={props.nextStage}
              disabled={props.activeStep === 2}
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
