// ---------- Start of Imports ----------
// React imports
import React, { useState } from "react";
// React Redux import
import { connect } from "react-redux";
// Material-ui core imports:
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// Material-ui icons imports:
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// Material-ui core/styles imports:
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
// ---------- End of Imports ----------

// ----- Start of Material-ui makeStyles custom CSS styles for items in the content area -----
const useStyles = makeStyles((theme) => ({
  localState: {
    marginTop: "4vh",
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

// ~ * ~ ----------> This is the start of the LogStage4 component <---------- ~ * ~ \\
const LogStage4 = (props) => {

  // MUI styles variable
  const classes = useStyles();
  
  // Local state
  const [emotionLog, setEmotionLog] = useState({
    primaryEmotion: props.primaryEmotion,
    intensityEmotion: props.intensityEmotion,
    intensityLevel: props.intensityLevel,
    howFeel: props.howFeel,
    whyFeel: props.whyFeel,
  });

  // Function sends state object to handleCloseAndDispatch function with props
  const theEnd = () => {
    setEmotionLog({
      primaryEmotion: props.primaryEmotion,
      intensityEmotion: props.intensityEmotion,
      intensityLevel: props.intensityLevel,
      howFeel: props.howFeel,
      whyFeel: props.whyFeel,
    });
    props.handleCloseAndDispatch(emotionLog); 
  }

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      {/* -------------------------------------------------- */}
      {/* Start of Tile Area */}
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Review Emotional Log
      </DialogTitle>
      {/* End of Tile Area */}
      {/* -------------------------------------------------- */}
      {/* Start of Content Area */}
      <DialogContent dividers>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          className={classes.localState}
        >
          <DialogContentText>
            Please review your log and go back and change anything if necessary.
          </DialogContentText>
          <DialogContentText>
            Primary Emotion Selected: {props.primaryEmotion}
          </DialogContentText>
          <DialogContentText>
            Intensity Level Selected: {props.intensityLevel}
          </DialogContentText>
          <DialogContentText>
            Intensity Emotion Selected: {props.intensityEmotion}
          </DialogContentText>
          <DialogContentText>Your How: {props.howFeel}</DialogContentText>
          <DialogContentText>Your Why: {props.whyFeel}</DialogContentText>
          <DialogContentText>
            If everything looks good, click finish to log your emotions for the
            day. Thank you!
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
              onClick={theEnd}
              disabled={props.activeStep === 4}
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
      {/* End of Actions Area */}
      {/* -------------------------------------------------- */}
      {/* ----- This is the end of the Dialog Area ----- */}
    </div>
  );
};
// ~ * ~ ----------> This is the end of the LogStage4 component <---------- ~ * ~ \\

export default connect()(LogStage4);
