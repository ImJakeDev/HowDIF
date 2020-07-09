import { combineReducers } from "redux";

const emotionLog = (state = "", action) => {
  const newState = state;
  switch (action.type) {
    case "LOG_NEW_EMOTION_LOG":
      
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  emotionLog,
});
