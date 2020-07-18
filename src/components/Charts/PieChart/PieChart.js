import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ResponsivePie } from "@nivo/pie";
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
    height: "60vh",
  },
});

const PieChart = (props) => {

  const classes = useStyles();

  const history = useHistory();

  const [data, setData] = useState([]);

  const { emotionPie } = props;

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    setData(emotionPie);
  }, [setData, emotionPie]);

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
              Emotion Pie
            </Typography>
            <Button variant="contained" onClick={() => history.push("/home")}>
              Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box component="div" className={classes.chart}>
              <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
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
                borderWidth={1}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: "color" }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                  {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                  },
                  {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                  },
                ]}
                fill={[
                  {
                    match: {
                      id: "joy",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "trust",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "anticipation",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "surprise",
                    },
                    id: "dots",
                  },
                  {
                    match: {
                      id: "disgust",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "sadness",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "fear",
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: "anger",
                    },
                    id: "lines",
                  },
                ]}
                legends={[
                  {
                    anchor: "bottom",
                    direction: "row",
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    symbolSize: 18,
                    symbolShape: "circle",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: "#000",
                        },
                      },
                    ],
                  },
                ]}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log('Here is Redux store state:', state); // state
  console.log("Here is Redux ownProps:", ownProps); // ownProps
  return {
    emotionPie: state.emotionLog.emotionPie,
  };
};

export default connect(mapStateToProps)(PieChart);
