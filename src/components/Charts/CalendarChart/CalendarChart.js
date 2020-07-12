import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ResponsiveCalendar } from "@nivo/calendar";
import { useHistory } from "react-router-dom";
import "./CalendarChart.css";

const CalendarChart = (props) => {
  const history = useHistory();

  const [data, setData] = useState([]);

  const { emotionsToDate } = props;

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    setData(emotionsToDate);
  }, [setData, emotionsToDate]);


  return (
    <>
      <div>
        <center>
          <h1>Emotions to Date</h1>
          <button onClick={() => history.push("/home")}>Back</button>
          <div className="boxSize">
            <ResponsiveCalendar
              data={data}
              from="2020-01-01" // Will have to turn these into a function some how...
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

const mapStateToProps = (state, ownProps) => {
  console.log("Here is Redux store state:", state); // state
  console.log("Here is Redux ownProps:", ownProps); // ownProps
  return {
    emotionsToDate: state.emotionLog.emotionsToDate,
  };
};

export default connect(mapStateToProps)(CalendarChart);
