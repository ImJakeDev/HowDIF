import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ResponsiveRadar } from "@nivo/radar";
import { useHistory } from "react-router-dom";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//Material-ui core/colors imports:
import amber from "@material-ui/core/colors/amber";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    marginTop: "2vh",
  },
  chart: {
    width: "90vh",
    height: "70vh",
  },
});

const RadarChart = (props) => {

  const classes = useStyles();

  const history = useHistory();

  const [data, setData] = useState([]);

  const { emotionalRadar } = props;

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    setData(emotionalRadar);
  }, [setData, emotionalRadar]);

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
              Emotional Radar
            </Typography>
            <Button variant="contained" onClick={() => history.push("/home")}>
              Back
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box component="div" className={classes.chart}>
              <ResponsiveRadar
                data={data}
                keys={["This many times"]}
                indexBy="emotion"
                maxValue="auto"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                curve="cardinalClosed"
                borderWidth={2}
                borderColor={{ from: "color" }}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={{ theme: "background" }}
                dotBorderWidth={2}
                dotBorderColor={{ from: "color" }}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={[amber[700]]}
                fillOpacity={0.25}
                blendMode="normal"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
                legends={[
                  {
                    anchor: "top-left",
                    direction: "column",
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: "#999",
                    symbolSize: 12,
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
  console.log("Here is Redux store state:", state); // state
  console.log("Here is Redux ownProps:", ownProps); // ownProps
  return {
    emotionalRadar: state.emotionLog.emotionalRadar,
  };
};

export default connect(mapStateToProps)(RadarChart);
