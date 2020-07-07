# Project design ideas, tasks, and thoughts:

1. Server routers, HTTP request to database
  - How many routers to I need?
  - What are my HTTPs going to look like?
    - emotions.router.js
      - Will have all sorts of HTTP requests
      - Ones for the process log
      - I might also put the data request for the charts here. Might be better for them to have their own though... hm...
      - POST to Database to insert new log into the "emotion_logged" table
        - INSERT INTO "emotion_logged" ("user_id", "primary_emotion", "intensity_emotion", "intensity_level", "how_feel", "why_feel")
          VALUES ($1, $2, $3, $4, $5, $6);
    - radar.router.js <- like this or just a /radar

2. Index.js ->
  - Holds Sagas and reducers
  - What might the reducers look like:
    - 
  - What might the sagas look like:
    - 