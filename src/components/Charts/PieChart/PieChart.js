import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ResponsivePie } from "@nivo/pie";
import { useHistory } from "react-router-dom";
import "./PieChart.css";

const PieChart = (props) => {

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
                "#E76F51",
                "#2A9D8F",
                "#96B2F3",
                "#FFB0F7",
                "#91EBF3",
                "#F4A261",
                "#98CE00",
                "#E9C46A",
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
          </div>
        </center>
      </div>
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
