import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ResponsivePie } from "@nivo/pie";
import { useHistory } from "react-router-dom";
import "./PieChart.css";

// This one was a bit easier

function PieChart(props) {

  const { dispatch } = props;

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    dispatch({ type: "FETCH_PIE_DATA" });
  }, [dispatch]);

  const [data] = useState([
    {
      id: "anger",
      label: "anger",
      value: 227,
      color: "hsl(249, 70%, 50%)",
    },
    {
      id: "fear",
      label: "fear",
      value: 313,
      color: "hsl(228, 70%, 50%)",
    },
    {
      id: "sadness",
      label: "sadness",
      value: 491,
      color: "hsl(316, 70%, 50%)",
    },
    {
      id: "disgust",
      label: "disgust",
      value: 297,
      color: "hsl(204, 70%, 50%)",
    },
    {
      id: "surprise",
      label: "surprise",
      value: 374,
      color: "hsl(158, 70%, 50%)",
    },
    {
      id: "anticipation",
      label: "anticipation",
      value: 230,
      color: "hsl(214, 70%, 50%)",
    },
    {
      id: "trust",
      label: "trust",
      value: 884,
      color: "hsl(219, 70%, 50%)",
    },
    {
      id: "joy",
      label: "joy",
      value: 597,
      color: "hsl(225, 70%, 50%)",
    },
  ]);

  const history = useHistory();

  return (
    <>
      <div>
        <center>
          <h1>Emotional Radar</h1>
          <button onClick={() => history.push("/home")}>Back</button>
          <div className="boxSize">
            <ResponsivePie
              data={data}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={[
                "#61cdbb",
                "#32936F",
                "#e8c1a0",
                "#f47560",
                "#F4E04D",
                "#587792",
                "#CBDFBD",
                "#A53860",
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
                    id: "ruby",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "c",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "go",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "python",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "scala",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "lisp",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "elixir",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "javascript",
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
          </div>
        </center>
      </div>
    </>
  );
}

export default connect()(PieChart);
