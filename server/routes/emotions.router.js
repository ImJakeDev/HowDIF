const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

const moment = require("moment");

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

// ----- PUT route to /api/emotions/log -----
router.put("/log", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated() === false) {
    res.sendStatus(403);
    return;
  }
  const log = req.body;
  const user = req.user; // user authenticated
  console.log(user); // logs user
  console.log(log); // logs the log (meta...)
  const queryText = `UPDATE "emotion_logged" SET "how_feel" = $3, "why_feel" = $4 WHERE "user_id" = $1 AND "id" = $2;`;
  const queryValues = [
    user.id,
    log.id,
    log.howFeel,
    log.whyFeel,
  ];
  console.log(queryValues);
  pool
    .query(queryText, queryValues)
    .then(() => {
      console.log("You have updated those fields");
      res.sendStatus(204);
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
      result.rows.map((item) => {
        if (item.id === "anger") {
          item.color = "#E76F51"; // red
        } else if (item.id === "fear") {
          item.color = "#2A9D8F"; // cooler green
        } else if (item.id === "sadness") {
          item.color = "#96B2F3"; // blue
        } else if (item.id === "disgust") {
          item.color = "#FFB0F7"; // pink ??
        } else if (item.id === "surprise") {
          item.color = "#91EBF3"; // light blue
        } else if (item.id === "anticipation") {
          item.color = "#F4A261"; // orange
        } else if (item.id === "trust") {
          item.color = "#98CE00"; // lime green
        } else if (item.id === "joy") {
          item.color = "#E9C46A"; // yellow
        } else {
          item.color = "#98838F";
        }
      });
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// ----- GET route to /api/emotions/radar -----
router.get("/radar", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated() === false) {
    res.sendStatus(403);
    return;
  }
  const user = req.user; // user authenticated
  console.log(user); // logs user
  // What do I need?
  /*
  {
      emotion: "emotion's name",
      "This many times": emotion's number count,
    }
  */
  const queryText = `
    SELECT "primary_emotion" AS emotion, count("primary_emotion") AS "This many times"
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

// ----- GET route to /api/emotions/calendar -----
router.get("/calendar", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated() === false) {
    res.sendStatus(403);
    return;
  }
  const user = req.user; // user authenticated
  console.log(user); // logs user
  // What do I need?
  /*
  {
      day: "YYYY-MM-DD",
      value: A number value that represents the emotion,
    }
  */
  const queryText = `
    SELECT "date" AS day, "primary_emotion" AS value
    FROM "emotion_logged"
    WHERE "user_id" = $1
    ORDER BY "date";
  `;
  const queryValues = [user.id];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      result.rows.map((item) => {
        if (moment(item.day) !== moment(item.day).format("YYYY-MM-DD")) {
          item.day = moment(item.day).format("YYYY-MM-DD");
        }
        if (item.value === "anger") {
          item.value = 1;
        } else if (item.value === "fear") {
          item.value = 2;
        } else if (item.value === "sadness") {
          item.value = 3;
        } else if (item.value === "disgust") {
          item.value = 4;
        } else if (item.value === "surprise") {
          item.value = 5;
        } else if (item.value === "anticipation") {
          item.value = 6;
        } else if (item.value === "trust") {
          item.value = 7;
        } else if (item.value === "joy") {
          item.value = 8;
        } else {
          item.value = 0;
        }
      });
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// ----- GET route to /api/emotions/table -----
router.get("/table", rejectUnauthenticated, (req, res) => {
  if (req.isAuthenticated() === false) {
    res.sendStatus(403);
    return;
  }
  const user = req.user; // user authenticated
  // What do I need?
  /*
  {
      id: number,
      date: "YYYY-MM-DD",
      primaryEmotion: "emotion",
      intensityEmotion: "emotion",
      intensityLevel: number,
      howFeel: "text string",
      whyFeel: "text string",
    }
  */
  const queryText = `
    SELECT id, "date" AS date, "primary_emotion" AS "primaryEmotion", "intensity_emotion" AS "intensityEmotion", "intensity_level" AS "intensityLevel", "how_feel" AS "howFeel", "why_feel" AS "whyFeel"
    FROM "emotion_logged"
    WHERE "user_id" = $1
    ORDER BY "date";
  `;
  const queryValues = [user.id];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      result.rows.map((item) => {
        if (moment(item.date) !== moment(item.date).format("YYYY-MM-DD")) {
          item.date = moment(item.date).format("YYYY-MM-DD");
        }
      });
      console.log('Getting everything for the table');
      res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
