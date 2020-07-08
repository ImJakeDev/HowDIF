import React, { useState } from "react";
import { ResponsiveRadar } from "@nivo/radar";
import "./RadarChart.css";

// Went alright

function RadarChart() {
  const [data] = useState([
    {
      emotion: "anger",
      user: 118,
    },
    {
      emotion: "fear",
      user: 109,
    },
    {
      emotion: "sadness",
      user: 20,
    },
    {
      emotion: "disgust",
      user: 88,
    },
    {
      emotion: "surprise",
      user: 98,
    },
    {
      emotion: "anticipation",
      user: 39,
    },
    {
      emotion: "trust",
      user: 79,
    },
    {
      emotion: "joy",
      user: 78,
    },
  ]);

  return (
    <>
      <div className="boxSize">
        <h1>Emotional Radar</h1>
        <ResponsiveRadar
          data={data}
          keys={["user"]}
          indexBy="emotion"
          maxValue="auto"
          margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
          curve="linearClosed"
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
    </>
  );
}

export default RadarChart;
