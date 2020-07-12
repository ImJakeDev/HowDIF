import React, { useState } from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { useHistory } from "react-router-dom";
import "./CalendarChart.css";

const CalendarChart = (props) => {
  const history = useHistory();
  const [data] = useState([
    {
      day: "2020-07-13",
      value: 1,
      emotion: "anger",
    },
    {
      day: "2020-01-05",
      value: 2,
      emotion: "fear",
    },
    {
      day: "2020-06-05",
      value: 3,
      emotion: "sadness",
    },
    {
      day: "2020-04-21",
      value: 4,
      emotion: "disgust",
    },
    {
      day: "2020-06-28",
      value: 5,
      emotion: "surprise",
    },
    {
      day: "2020-07-11",
      value: 6,
      emotion: "anticipation",
    },
    {
      day: "2020-07-15",
      value: 7,
      emotion: "trust",
    },
    {
      day: "2020-10-31",
      value: 8,
      emotion: "joy",
    },
  ]);

  return (
    <>
      <div>
        <center>
          <h1>Emotional Radar</h1>
          <button onClick={() => history.push("/home")}>Back</button>
          <div className="boxSize">
            <ResponsiveCalendar
              data={data}
              from="2020-01-01"
              to="2021-01-01"
              emptyColor="#eeeeee"
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
          </div>
        </center>
      </div>
    </>
  );
};

export default CalendarChart;
