import React from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const LogStage1 = (props) => {

  return (
    <div>
        {/* ----- This is the start of the Dialog Area ----- */}
        <DialogTitle id="form-dialog-title">
          Select a Primary Emotion you are feeling.
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            anger, fear, sadness, disgust, surprise, anticipation, trust, or joy
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.nextStage} color="primary">
            Next
          </Button>
        </DialogActions>
        {/* ----- This is the end of the Dialog Area ----- */}
    </div>
  );
};

export default connect()(LogStage1);
