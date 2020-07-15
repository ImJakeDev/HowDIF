import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogContentText,
  Grid,
  MobileStepper,
  Slider,
  Typography,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "45vh",
    marginTop: "4vh",
  },
  margin: {
    height: theme.spacing(3),
  },
  rightAlign: {
    textAlign: "right",
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

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minHeight: "40vh",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
      return props.setIntensityEmotion(renderStrongEmotion());
    } else if (numValue < 0) {
      return props.setIntensityEmotion(renderNotStrongEmotion());
    } else {
      return props.setIntensityEmotion(props.primaryEmotion);
    }
  };

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    setEmotion(props.primaryEmotion);
    setNumValue(numValue);
    props.setIntensityLevel(numValue);
    intensityEmotionOptions(numValue);
  }, [setEmotion, setNumValue, intensityEmotionOptions, numValue, props]);

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        How intense are you feeling {props.primaryEmotion}?
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography
                id="discrete-slider-custom"
                className={classes.rightAlign}
                gutterBottom
              >
                {renderNotStrongEmotion()}
              </Typography>
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={3}>
              <Typography id="discrete-slider-custom" gutterBottom>
                {renderStrongEmotion()}
              </Typography>
            </Grid>
          </Grid>
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
              disabled={
                props.intensityEmotion === null ||
                props.intensityEmotion === "Strong" ||
                props.intensityEmotion === "Not Strong"
              }
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