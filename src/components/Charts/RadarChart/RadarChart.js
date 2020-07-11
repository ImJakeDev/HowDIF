import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ResponsiveRadar } from "@nivo/radar";
import { useHistory } from "react-router-dom";
import "./RadarChart.css";

const RadarChart = (props) => {

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
      <div>
        <center>
          <h1>Emotional Radar</h1>
          <button onClick={() => history.push("/home")}>Back</button>
          <div className="boxSize">
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
          </div>
        </center>
      </div>
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
