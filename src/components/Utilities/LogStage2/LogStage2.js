// ---------- Start of Imports ----------
// React imports
import React, { useState, useEffect } from "react";
// React Redux import
import { connect } from "react-redux";
// Material-ui core imports:
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Slider from "@material-ui/core/Slider";
import IconButton from "@material-ui/core/IconButton";
// Material-ui icons imports:
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// Material-ui core/styles imports:
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
// ---------- End of Imports ----------

// ----- Start of Stepper marks ----- 
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
// ----- End of Stepper marks -----

// ----- Start of Text Function -----
function valueText(value) {
  const newVal = value;
  return newVal;
}
// ----- End of Text Function -----

// ----- Start of Material-ui makeStyles custom CSS styles for items in the content area -----
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "45vh",
    marginTop: "12vh",
  },
  margin: {
    height: theme.spacing(3),
  },
  rightAlign: {
    textAlign: "right",
  },
  localState: {
    marginTop: "8vh",
  },
}));
// ----- End of Material-ui makeStyles custom CSS styles for items in the content area -----

// ----- Start of Material-ui makeStyles custom CSS styles for Title and others -----
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
// ----- Start of Material-ui makeStyles custom CSS styles for Title and others -----

// ----- Start of Custom MUI component for Dialog Title -----
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
// ----- End of Custom MUI component for Dialog Title -----

// ----- Start of Custom MUI component for Dialog Content -----
const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    minHeight: "40vh",
  },
}))(MuiDialogContent);
// ----- End of Custom MUI component for Dialog Content -----

// ----- Start of Custom MUI component for Dialog Actions -----
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
// ----- End of Custom MUI component for Dialog Actions -----

// ~ * ~ ----------> This is the start of the LogStage2 component <---------- ~ * ~ \\
const LogStage2 = (props) => {

  // Local State
  const [numValue, setNumValue] = useState(0);
  const [emotion, setEmotion] = useState(null);

  // MUI styles variable
  const classes = useStyles();

  // Function to render Not Strong Emotion
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

  // Function to render Strong Emotion
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

  // Function to handle change for Intensity Level
  const handleChangeForInLvl = (event, numValue) => {
    setEmotion(props.primaryEmotion);
    setNumValue(numValue);
    props.setIntensityLevel(numValue);
    console.log(numValue);
    intensityEmotionOptions(numValue);
  };

  // Function with conditionals for Intensity Emotion
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
      {/* -------------------------------------------------- */}
      {/* Start of Tile Area */}
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        How intense are you feeling {props.primaryEmotion}?
      </DialogTitle>
      {/* End of Tile Area */}
      {/* -------------------------------------------------- */}
      {/* Start of Content Area */}
      <DialogContent dividers>
        <Grid container spacing={2} className={classes.root}>
          {/* -------------------------------------------------- */}
          {/* Start of Not Strong Emotion */}
          <Grid item xs={3}>
            <Typography
              id="discrete-slider-custom"
              className={classes.rightAlign}
              gutterBottom
            >
              {renderNotStrongEmotion()}
            </Typography>
          </Grid>
          {/* End of Not Strong Emotion */}
          {/* -------------------------------------------------- */}
          {/* Start of Slider */}
          <Grid item xs={6} className={classes.sliderArea}>
            <Slider
              color="secondary"
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
          {/* End of Slider */}
          {/* -------------------------------------------------- */}
          {/* Start of Strong Emotion */}
          <Grid item xs={3}>
            <Typography id="discrete-slider-custom" gutterBottom>
              {renderStrongEmotion()}
            </Typography>
          </Grid>
          {/* End of Strong Emotion */}
          {/* -------------------------------------------------- */}
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          className={classes.localState}
        >
          <DialogContentText>
            Intensity level: {props.intensityLevel}
          </DialogContentText>
          <DialogContentText>
            Intensity emotion: {props.intensityEmotion}
          </DialogContentText>
        </Box>
      </DialogContent>
      {/* End of Content Area */}
      {/* -------------------------------------------------- */}
      {/* Start of Actions Area */}
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
      {/* End of Actions Area */}
      {/* -------------------------------------------------- */}
      {/* ----- This is the end of the Dialog Area ----- */}
    </div>
  );
};
// ~ * ~ ----------> This is the end of the LogStage2 component <---------- ~ * ~ \\

export default connect()(LogStage2);
