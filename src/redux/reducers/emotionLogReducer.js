import { combineReducers } from "redux";

const emotionPie = (state = [], action) => {
  switch (action.type) {
    case "SET_EMOTION_PIE":
      return action.payload;
    default:
      return state;
  }
};

const emotionalRadar = (state = [], action) => {
  switch (action.type) {
    case "SET_EMOTIONAL_RADAR":
      return action.payload;
    default:
      return state;
  }
};

const emotionsToDate = (state = [], action) => {
  switch (action.type) {
    case "SET_EMOTIONS_TO_DATE":
      return action.payload;
    default:
      return state;
  }
};

const emotionsTable = (state = [], action) => {
  switch (action.type) {
    case "SET_EMOTIONS_TABLE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  emotionPie,
  emotionalRadar,
  emotionsToDate,
  emotionsTable,
});
