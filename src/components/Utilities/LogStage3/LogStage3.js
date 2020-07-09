import React from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MobileStepper,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const LogStage3 = (props) => {
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
        />
      </DialogContent>
      <DialogTitle id="form-dialog-title">
        Describe why you are feeling (emotion)?
      </DialogTitle>
      <DialogContent>
        <TextField
          id="outlined-multiline-static"
          label="Why"
          multiline
          rows={4}
          variant="outlined"
        />
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
