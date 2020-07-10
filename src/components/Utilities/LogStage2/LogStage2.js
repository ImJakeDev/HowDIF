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
  // console.log(newVal);
  return newVal;
}

const LogStage2 = (props) => {
  const [numValue, setNumValue] = useState(0);

  const classes = useStyles();

  const handleChangeForInLvl = (event, numValue) => {
    setNumValue(numValue);
    props.setIntensityLevel(numValue);
    console.log(numValue);
  };

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      <DialogTitle id="form-dialog-title">
        How intense are you feeling (emotion)?
      </DialogTitle>
      <DialogContent>
        <div className={classes.root}>
          <Typography id="discrete-slider-custom" gutterBottom>
            Not Strong
          </Typography>
          <Typography id="discrete-slider-custom" gutterBottom>
            Strong
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
