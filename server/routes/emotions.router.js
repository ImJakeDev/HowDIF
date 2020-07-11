const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

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
    log.primaryEmotion,
    log.intensityEmotion,
    Number(log.intensityLevel),
    log.howFeel,
    log.whyFeel,
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

// ----- GET route to /api/emotions/pie -----
router.get("/pie", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated() === false) {
    res.sendStatus(403);
    return;
  }
  const user = req.user; // user authenticated
  console.log(user); // logs user
  // What do I need?
  /*
  {
      id: "emotion's name",
      label: "emotion's name",
      value: emotion's number count,
      color: "emotion's color value in a string and in hls or # or whatever...",
  }
  */
  const queryText = `
    SELECT "primary_emotion" AS id, "primary_emotion" AS label, count("primary_emotion") AS value
    FROM "emotion_logged"
    WHERE "user_id" = $1
    GROUP BY "primary_emotion";
  `;
  const queryValues = [user.id];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
