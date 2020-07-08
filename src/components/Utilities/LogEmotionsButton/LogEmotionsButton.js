import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Dialog,
} from "@material-ui/core";

import LogStage1 from "../LogStage1/LogStage1";
import LogStage2 from "../LogStage2/LogStage2";
import LogStage3 from "../LogStage3/LogStage3";

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

  const renderSwitch = () => {
    switch (stage) {
      case 1:
        return (
          // Need Stage 1 Component
          <LogStage1 nextStage={nextStage} />
        );
      case 2:
        return (
          // Need Stage 2 Component
          <LogStage2 nextStage={nextStage} prevStage={prevStage} />
        );
      case 3:
        return (
          // Need Stage 3 Component
          <LogStage3 handleClose={handleClose} prevStage={prevStage} />
        );
      default:
        console.log("This is a multi-stage dialog built with React.");
    }
  }

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
        {renderSwitch(stage)}
        {/* ----- This is the end of the Dialog Area ----- */}
      </Dialog>
    </div>
  );
};

export default connect()(LogEmotionsButton);
