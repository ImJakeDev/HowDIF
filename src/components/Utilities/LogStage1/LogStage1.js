// ---------- Start of Imports ----------
// React
import React from "react";
// React Redux import
import { connect } from "react-redux";
// Material-ui core imports:
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import MobileStepper from "@material-ui/core/MobileStepper";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// Material-ui icons imports:
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CloseIcon from "@material-ui/icons/Close";
// Material-ui core/styles imports:
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// Material-ui style imports:
import ThemeProvider from "@material-ui/styles/ThemeProvider";
// Material-ui core/colors imports:
import red from "@material-ui/core/colors/red";
import deepPurple from "@material-ui/core/colors/deepPurple";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import orange from "@material-ui/core/colors/orange";
// ---------- End of Imports ----------


// ----- Start of Custom Material Theme colors for buttons -----
const anger = createMuiTheme({
  palette: {
    primary: {
      // anger
      main: red[300],
    },
  },
});

const fear = createMuiTheme({
  palette: {
    primary: {
      // fear
      main: lightGreen[300],
    },
  },
});

const sadness = createMuiTheme({
  palette: {
    primary: {
      // sadness
      main: blue[300],
    },
  },
});

const disgust = createMuiTheme({
  palette: {
    primary: {
      // disgust
      main: deepPurple[300],
    },
  },
});

const surprise = createMuiTheme({
  palette: {
    primary: {
      // surprise
      main: green[300],
    },
  },
});

const anticipation = createMuiTheme({
  palette: {
    primary: {
      // anticipation
      main: orange[300],
    },
  },
});

const trust = createMuiTheme({
  palette: {
    primary: {
      // trust
      main: lime[300],
    },
  },
});

const joy = createMuiTheme({
  palette: {
    primary: {
      // joy
      main: yellow[300],
    },
  },
});
// ----- End of Custom Material Theme colors for buttons -----

// ----- Start of Material-ui custom CSS styles -----
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
// ----- End of Material-ui custom CSS styles -----

// ----- Start of Material-ui makeStyles custom CSS styles -----
const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3),
  },
  emotionButtons: {
    padding: theme.spacing(1),
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1),
  },
  buttonArea: {
    marginTop: "8vh",
  },
  localState: {
    marginTop: "8vh",
  },
}));
// ----- End of Material-ui makeStyles custom CSS styles -----

// ----- Start of Custom MUI component for HTML Tooltip -----
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);
// ----- End of Custom MUI component for HTML Tooltip -----

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

// ~ * ~ ----------> This is the start of the LogStage1 component <---------- ~ * ~ \\
const LogStage1 = (props) => {
  
  // MUI styles variable
  const classes = useStyles();

  // Sets primary emotion state by clicking emotions buttons
  const handleClickForPrimEmo = (param) => {
    props.setPrimaryEmotion(param);
    console.log(param);
  };

  return (
    <div>
      {/* ----- This is the start of the Dialog Area ----- */}
      {/* -------------------------------------------------- */}
      {/* Start of Tile Area */}
      <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
        Select a Primary Emotion you are feeling.
      </DialogTitle>
      {/* End of Tile Area */}
      {/* -------------------------------------------------- */}
      {/* Start of Content Area */}
      <DialogContent dividers>
        <Grid container spacing={3} className={classes.buttonArea}>
          {/* -------------------------------------------------- */}
          {/* Start of Anger Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={anger}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="top"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Anger</b>
                        {
                          " is an intense emotional state involving a strong uncomfortable and hostile response to a perceived provocation, hurt or threat."
                        }
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("anger")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    anger
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Anger Button */}
          {/* -------------------------------------------------- */}
          {/* Start of Anticipation Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={anticipation}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="top"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Anticipation</b>
                        {
                          " is an emotion involving pleasure, or anxiety in considering or awaiting an expected event."
                        }
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("anticipation")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    anticipation
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Anticipation Button */}
          {/* -------------------------------------------------- */}
          {/* Start of Joy Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={joy}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="top"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Joy</b>
                        {" is a feeling of great pleasure and happiness."}
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("joy")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    joy
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Joy Button */}
          {/* -------------------------------------------------- */}
          {/* Start of Trust Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={trust}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="top"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Trust</b>
                        {
                          " is an abstract mental attitude toward a proposition that someone or something is dependable."
                        }
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("trust")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    trust
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Trust Button */}
          {/* -------------------------------------------------- */}
          {/* Start of Fear Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={fear}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="bottom"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Fear</b>
                        {
                          " is an unpleasant feeling triggered by the perception of danger, real or imagined."
                        }
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("fear")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    fear
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Fear Button */}
          {/* -------------------------------------------------- */}
          {/* Start of Surprise Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={surprise}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="bottom"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Surprise</b>
                        {
                          " is a brief mental and physiological state, a startle response experienced by animals and humans as the result of an unexpected event."
                        }
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("surprise")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    surprise
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Surprise Button */}
          {/* -------------------------------------------------- */}
          {/* Start of Sadness Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={sadness}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="bottom"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Sadness</b>
                        {
                          " is an emotional pain associated with, or characterized by, feelings of disadvantage, loss, despair, grief, helplessness, disappointment and sorrow."
                        }
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("sadness")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    sadness
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Sadness Button */}
          {/* -------------------------------------------------- */}
          {/* Start of Disgust Button */}
          <Grid item xs={3}>
            <Box display="flex" justifyContent="center">
              <ThemeProvider theme={disgust}>
                <HtmlTooltip
                  arrow
                  leaveDelay={300}
                  placement="bottom"
                  title={
                    <React.Fragment>
                      <Typography color="inherit" variant="body2">
                        <b>Disgust</b>
                        {
                          " is an emotional response of rejection or revulsion to something potentially contagious or something considered offensive, distasteful, or unpleasant."
                        }
                      </Typography>
                    </React.Fragment>
                  }
                >
                  <Button
                    onClick={() => handleClickForPrimEmo("disgust")}
                    className={classes.emotionButtons}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    disgust
                  </Button>
                </HtmlTooltip>
              </ThemeProvider>
            </Box>
          </Grid>
          {/* End of Disgust Button */}
          {/* -------------------------------------------------- */}
        </Grid>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="flex-end"
          className={classes.localState}
        >
          <DialogContentText>{props.primaryEmotion}</DialogContentText>
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
              disabled={props.primaryEmotion === null}
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
              onClick={props.handleClose}
              disabled={props.activeStep === 1}
            >
              <KeyboardArrowLeft />
              Cancel
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
// ~ * ~ ----------> This is the end of the LogStage1 component <---------- ~ * ~ \\

export default connect()(LogStage1);
