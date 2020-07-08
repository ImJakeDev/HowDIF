import React from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

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

export default connect()(LogStage3);
