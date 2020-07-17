// ---------- Start of Imports ----------
// React
import React from "react";
// React Redux import
import { connect } from "react-redux";
// Material-ui core imports:
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// Material-ui icons imports:
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// Material-ui core/styles imports:
import withStyles from "@material-ui/core/styles/withStyles";
// ---------- End of Imports ----------

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
    minHeight: "16.5vh",
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

// ~ * ~ ----------> This is the start of the LogStage3 component <---------- ~ * ~ \\
const LogStage3 = (props) => {

  const handleChangeForHow = (e) => {
    props.setHowFeel(e.target.value);
  }

  const handleChangeForWhy = (e) => {
    props.setWhyFeel(e.target.value);
  };

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      {/* -------------------------------------------------- */}
      {/* Start of Tile Area */}
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Describe how <b>{props.primaryEmotion}</b> {"&"} <b>{props.intensityEmotion}</b> makes you feel right now?
      </DialogTitle>
      {/* End of Tile Area */}
      {/* -------------------------------------------------- */}
      {/* Start of Content Area */}
      <DialogContent dividers>
        <TextField
          id="outlined-multiline-static"
          label="How"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange={(event) => handleChangeForHow(event)}
        />
      </DialogContent>
      {/* End of Content Area */}
      {/* -------------------------------------------------- */}
      {/* Start of Tile Area */}
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Describe why you are feeling <b>{props.primaryEmotion}</b> {"&"} <b>{props.intensityEmotion}</b>?
      </DialogTitle>
      {/* End of Tile Area */}
      {/* -------------------------------------------------- */}
      {/* Start of Content Area */}
      <DialogContent dividers>
        <TextField
          id="outlined-multiline-static"
          label="Why"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange={(event) => handleChangeForWhy(event)}
        />
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
      {/* End of Actions Area */}
      {/* -------------------------------------------------- */}
      {/* ----- This is the end of the Dialog Area ----- */}
    </div>
  );
};
// ~ * ~ ----------> This is the end of the LogStage3 component <---------- ~ * ~ \\

export default connect()(LogStage3);
