import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: will be fired on "ADD_EMOTION_LOG" actions
function* addEmotion(action) {
  try {
    const emotionLog = action.payload;
    const response = yield axios.post("/api/emotions/log", emotionLog);
    // yield put({ type: "SET_USER", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// worker Saga: will be fired on "FETCH_PIE_DATA" actions
function* fetchPieData() {
  try {
    const response = yield axios.get("/api/emotions/pie");
    yield put({ type: "SET_EMOTION_PIE", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// worker Saga: will be fired on "FETCH_RADAR_DATA" actions
function* fetchRadarData() {
  try {
    const response = yield axios.get("/api/emotions/radar");
    yield put({ type: "SET_EMOTIONAL_RADAR", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

// worker Saga: will be fired on "FETCH_RADAR_DATA" actions
function* fetchCalendarData() {
  try {
    const response = yield axios.get("/api/emotions/calendar");
    yield put({ type: "SET_EMOTIONS_TO_DATE", payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function* emotionsSaga() {
  yield takeLatest("ADD_EMOTION_LOG", addEmotion);
  yield takeLatest("FETCH_PIE_DATA", fetchPieData);
  yield takeLatest("FETCH_RADAR_DATA", fetchRadarData);
  yield takeLatest("FETCH_CALENDAR_DATA", fetchCalendarData);
}

export default emotionsSaga;
