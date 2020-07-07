-- Create a database named 'howdif'.

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (225) NOT NULL,
    "firstname" VARCHAR (225) NOT NULL,
    "lastname" VARCHAR (225) NOT NULL
);
-- Table holds all the data for each log created on the app
CREATE TABLE "emotion_logged" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"date" timestamp NOT NULL DEFAULT NOW(),
	"primary_emotion" varchar(255) NOT NULL,
	"intensity_emotion" varchar(255) NOT NULL,
	"intensity_level" integer NOT NULL,
	"how_feel" varchar(255),
	"why_feel" varchar(255)
);