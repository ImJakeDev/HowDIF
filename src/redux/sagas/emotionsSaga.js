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

function* emotionsSaga() {
  yield takeLatest("ADD_EMOTION_LOG", addEmotion);
}

export default emotionsSaga;
