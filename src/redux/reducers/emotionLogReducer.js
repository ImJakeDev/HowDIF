import { combineReducers } from "redux";

// const primaryEmotion = (state = null, action) => {
//   switch (action.type) {
//     case "SET_PRIMARY_EMOTION":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const intensityEmotion = (state = null, action) => {
//   switch (action.type) {
//     case "SET_INTENSITY_EMOTION":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const intensityLevel = (state = 0, action) => {
//   switch (action.type) {
//     case "SET_INTENSITY_LEVEL":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const howFeel = (state = "", action) => {
//   switch (action.type) {
//     case "SET_HOW_FEEL":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// const whyFeel = (state = "", action) => {
//   switch (action.type) {
//     case "SET_WHY_FEEL":
//       return action.payload;
//     default:
//       return state;
//   }
// };

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

export default combineReducers({
  // primaryEmotion,
  // intensityEmotion,
  // intensityLevel,
  // howFeel,
  // whyFeel,
  emotionPie,
  emotionalRadar,
});
