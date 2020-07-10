import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MobileStepper,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const LogStage4 = (props) => {
  
  const [emotionLog, setEmotionLog] = useState({
    primaryEmotion: props.primaryEmotion,
    intensityEmotion: props.intensityEmotion,
    intensityLevel: props.intensityLevel,
    howFeel: props.howFeel,
    whyFeel: props.whyFeel,
  });

  const theEnd = () => {
    setEmotionLog({
      primaryEmotion: props.primaryEmotion,
      intensityEmotion: props.intensityEmotion,
      intensityLevel: props.intensityLevel,
      howFeel: props.howFeel,
      whyFeel: props.whyFeel,
    });
    console.log(emotionLog);

    props.handleCloseAndDispatch(emotionLog); 
  }

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      <DialogTitle id="form-dialog-title">Review Emotional Log</DialogTitle>
      <DialogContent>
        <DialogContentText>Here is you log -></DialogContentText>
        <ul>
          <li>{props.primaryEmotion}</li>
          <li>{props.intensityLevel}</li>
          <li>{props.intensityEmotion}</li>
          <li>{props.howFeel}</li>
          <li>{props.whyFeel}</li>
        </ul>
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
              onClick={theEnd}
              disabled={props.activeStep === 4}
            >
              Finish
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
              onClick={props.prevStage}
              disabled={props.activeStep === 0}
            >
              {props.theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </DialogActions>
      {/* ----- This is the end of the Dialog Area ----- */}
    </div>
  );
};

export default connect()(LogStage4);
