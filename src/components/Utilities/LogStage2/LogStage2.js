import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MobileStepper,
  Slider,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: -5,
    label: "-5",
  },
  {
    value: -4,
    label: "-4",
  },
  {
    value: -3,
    label: "-3",
  },
  {
    value: -2,
    label: "-2",
  },
  {
    value: -1,
    label: "-1",
  },
  {
    value: 0,
    label: "0",
  },
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

function valueText(value) {
  const newVal = value;
  return newVal;
}

const LogStage2 = (props) => {
  // I got some bugs in here with intensityEmotion

  const [numValue, setNumValue] = useState(0);

  const [emotion, setEmotion] = useState(null);

  const classes = useStyles();


  const renderNotStrongEmotion = () => {
    switch (emotion) {
      case "anger":
        return "annoyance";
      case "sadness":
        return "gloominess";
      case "fear":
        return "timidity";
      case "disgust":
        return "dislike";
      case "surprise":
        return "uncertainty";
      case "anticipation":
        return "interest";
      case "trust":
        return "acceptance";
      case "joy":
        return "serenity";
      default:
        return "Not Strong";
    }
  };

  const renderStrongEmotion = () => {
    switch (emotion) {
      case "anger":
        return "fury";
      case "sadness":
        return "grief";
      case "fear":
        return "terror";
      case "disgust":
        return "loathing";
      case "surprise":
        return "amazement";
      case "anticipation":
        return "vigilance";
      case "trust":
        return "admiration";
      case "joy":
        return "ecstasy";
      default:
        return "Strong";
    }
  };
  
  const handleChangeForInLvl = (event, numValue) => {
    setEmotion(props.primaryEmotion);
    setNumValue(numValue);
    props.setIntensityLevel(numValue);
    console.log(numValue);
    intensityEmotionOptions(numValue);
  };

  const intensityEmotionOptions = (numValue) => {
    if (numValue > 0) {
      return props.setIntensityEmotion(renderStrongEmotion);
    } else if (numValue < 0) {
      return props.setIntensityEmotion(renderNotStrongEmotion);
    } else {
      return props.setIntensityEmotion(props.primaryEmotion);
    }
  };

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      <DialogTitle id="form-dialog-title">
        How intense are you feeling {props.primaryEmotion}?
      </DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Typography id="discrete-slider-custom" gutterBottom>
            {renderNotStrongEmotion()}
          </Typography>
          <Typography id="discrete-slider-custom" gutterBottom>
            {renderStrongEmotion()}
          </Typography>
          <Slider
            value={numValue}
            onChange={handleChangeForInLvl}
            track={false}
            defaultValue={numValue}
            getAriaValueText={valueText}
            aria-labelledby="track-false-slider"
            step={1}
            min={-5}
            max={5}
            valueLabelDisplay="auto"
            marks={marks}
          />
        </div>
        <DialogContentText>{props.intensityLevel}</DialogContentText>
        <DialogContentText>{props.intensityEmotion}</DialogContentText>
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

export default connect()(LogStage2);