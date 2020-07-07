const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const { rejectUnauthenticated } = require("../modules/authentication-middleware");

// ----- POST route to /api/emotions/log -----
router.post("/log", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated() === false) {
    res.sendStatus(403);
    return;
  }
  const log = req.body;
  const user = req.user; // user authenticated
  console.log(user); // logs user
  console.log(log); // logs the log (meta...)
  const queryText = `INSERT INTO "emotion_logged" ("user_id", "primary_emotion", "intensity_emotion", "intensity_level", "how_feel", "why_feel") VALUES ($1, $2, $3, $4, $5, $6);`;
  const queryValues = [
    user.id,
    log.primary_emotion,
    log.intensity_emotion,
    Number(log.intensity_level),
    log.how_feel,
    log.why_feel,
  ];
  console.log(queryValues);
  pool
    .query(queryText, queryValues)
    .then(() => {
      console.log("Query worked I will now place the log into the DB.");
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
