import React from "react";
import { connect } from "react-redux";
import {
  Button,
  DialogContentText,
  TextField,
  MobileStepper,
  Typography,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

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
    minHeight: "16.5vh",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Describe how you feel?
      </DialogTitle>
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
        <DialogContentText>{props.howFeel}</DialogContentText>
      </DialogContent>
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Describe why you are feeling {props.primaryEmotion}?
      </DialogTitle>
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
        <DialogContentText>{props.whyFeel}</DialogContentText>
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

export default connect()(LogStage3);
