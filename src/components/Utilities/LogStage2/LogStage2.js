import React from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const LogStage2 = (props) => {
  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      <DialogTitle id="form-dialog-title">
        How intense are you feeling (emotion)?
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Strong ... or ... Not Strong</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.prevStage} color="primary">
          Back
        </Button>
        <Button onClick={props.nextStage} color="primary">
          Next
        </Button>
      </DialogActions>
      {/* ----- This is the end of the Dialog Area ----- */}
    </div>
  );
};

export default connect()(LogStage2);
