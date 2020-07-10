import React from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  MobileStepper,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const LogStage3 = (props) => {

  const handleChangeForHow = (e) => {
    props.setHowFeel(e.target.value);
  }

  const handleChangeForWhy = (e) => {
    props.setWhyFeel(e.target.value);
  };

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      <DialogTitle id="form-dialog-title">Describe how you feel?</DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-multiline-static"
          label="How"
          multiline
          rows={4}
          variant="outlined"
          onChange={(event) => handleChangeForHow(event)}
        />
        <DialogContentText>{props.howFeel}</DialogContentText>
      </DialogContent>
      <DialogTitle id="form-dialog-title">
        Describe why you are feeling {props.primaryEmotion}?
      </DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-multiline-static"
          label="Why"
          multiline
          rows={4}
          variant="outlined"
          onChange={(event) => handleChangeForWhy(event)}
        />
        <DialogContentText>{props.whyFeel}</DialogContentText>
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
              onClick={props.handleClose}
              disabled={props.activeStep === 3}
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

export default connect()(LogStage3);
