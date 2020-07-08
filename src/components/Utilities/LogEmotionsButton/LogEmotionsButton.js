import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const LogEmotionsButton = (props) => {
  // ----- Functional State with React useState Hook -----
  // primary_emotion - State default null
  const [primaryEmotion, setPrimaryEmotion] = useState(null);
  // intensity_emotion - State default null
  const [intensityEmotion, setIntensityEmotion] = useState(null);
  // intensity_level - State default 0
  const [intensityLevel, setIntensityLevel] = useState(0);
  // how_feel - State default ""
  const [howFeel, setHowFeel] = useState("");
  // why_feel - State default ""
  const [whyFeel, setWhyFeel] = useState("");
  // Stage state which will render the correct stage of the process of the emotion log
  // default is Stage 1 - Will begin at Stage 1
  const [stage, setStage] = useState(1);
  // Material-ui state for Dialog component rendering
  const [open, setOpen] = useState(false);

  // Proceed to next stage
  const nextStage = () => {
    setStage(stage + 1);
  };

  // Proceed to prev stage
  const prevStage = () => {
    setStage(stage - 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Log Emotion
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
        {/* ----- This is the end of the Dialog Area ----- */}
      </Dialog>
    </div>
  );
};

export default connect()(LogEmotionsButton);
