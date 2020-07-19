import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ResponsiveCalendar } from "@nivo/calendar";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Material-ui core/colors imports:
import blue from "@material-ui/core/colors/blue";
import deepPurple from "@material-ui/core/colors/deepPurple";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    marginTop: "2vh",
  },
  chart: {
    width: "90vh",
    height: "40vh",
  },
  anger: {
    backgroundColor: red[500],
    color: "white",
    padding: "1vh",
    margin: "1vh",
  },
  fear: {
    backgroundColor: lightGreen[500],
    padding: "1vh",
    margin: "1vh",
  },
  sadness: {
    backgroundColor: blue[500],
    color: "white",
    padding: "1vh",
    margin: "1vh",
  },
  disgust: {
    backgroundColor: deepPurple[500],
    color: "white",
    padding: "1vh",
    margin: "1vh",
  },
  surprise: {
    backgroundColor: green[500],
    color: "white",
    padding: "1vh",
    margin: "1vh",
  },
  anticipation: {
    backgroundColor: orange[500],
    padding: "1vh",
    margin: "1vh",
  },
  trust: {
    backgroundColor: lime[500],
    padding: "1vh",
    margin: "1vh",
  },
  joy: {
    backgroundColor: yellow[500],
    padding: "1vh",
    margin: "1vh",
  },
});

const CalendarChart = (props) => {

  const classes = useStyles();

  const history = useHistory();

  const [data, setData] = useState([{
      day: "0000-00-00",
      value: 0,
    }]);

  const { emotionsToDate } = props;

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    setData(emotionsToDate);
  }, [setData, emotionsToDate]);

  // If data is undefined it errors out
  const startDate = () => {
    const start = emotionsToDate[0].day;
    console.log('This is the start date', start);
    return start;
  }

  // If data is undefined it errors out
  const endDate = () => {
    const date = emotionsToDate.length - 1;
    const end = emotionsToDate[date].day;
    console.log("This is the end date", end);
    return end;
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={8}>
            <Typography variant="h3" gutterBottom>
              Emotions to Date
            </Typography>
            <Button variant="contained" onClick={() => history.push("/home")}>
              Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="row">
              <Box className={classes.anger}>
                <Typography variant="body2">Anger = 1</Typography>
              </Box>
              <Box className={classes.fear}>
                <Typography variant="body2">Fear = 2</Typography>
              </Box>
              <Box className={classes.sadness}>
                <Typography variant="body2">Sadness = 3</Typography>
              </Box>
              <Box className={classes.disgust}>
                <Typography variant="body2">Disgust = 4</Typography>
              </Box>
              <Box className={classes.surprise}>
                <Typography variant="body2">Surprise = 5</Typography>
              </Box>
              <Box className={classes.anticipation}>
                <Typography variant="body2">Anticipation = 6</Typography>
              </Box>
              <Box className={classes.trust}>
                <Typography variant="body2">Trust = 7</Typography>
              </Box>
              <Box className={classes.joy}>
                <Typography variant="body2">Joy = 8</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box component="div" className={classes.chart}>
              <ResponsiveCalendar
                data={data}
                from={startDate()} // Will have to turn these into a function some how...
                to={endDate()}
                emptyColor="#eeeeee"
                colors={[
                  red[500],
                  lightGreen[500],
                  blue[500],
                  deepPurple[500],
                  green[500],
                  orange[500],
                  lime[500],
                  yellow[500],
                ]}
                minValue={0}
                maxValue={9}
                indexBy="emotion"
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                monthLegendPosition="after"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                  {
                    anchor: "bottom-right",
                    direction: "row",
                    translateY: 36,
                    itemCount: 6,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: "right-to-left",
                  },
                ]}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("Here is Redux store state:", state); // state
  console.log("Here is Redux ownProps:", ownProps); // ownProps
  return {
    emotionsToDate: state.emotionLog.emotionsToDate,
  };
};

export default connect(mapStateToProps)(CalendarChart);
