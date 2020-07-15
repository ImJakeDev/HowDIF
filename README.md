# HowDIF

## Description

HowDIF or How Do I Feel is a react app. It solves the problem for a user of not being able to log one's emotions over time and not understanding their emotional state.
HowDIF is a tool that helps you understand yourself and helps identify the emotions you are feeling.
It is based off of [Plutchik’s Wheel of Emotions](https://en.wikipedia.org/wiki/Robert_Plutchik).
You can see and test a live version of it [here](guarded-beyond-56787).

## Installation

1. Create a database named `howdif`.
2. The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/), so you will need to make sure to have that installed. I recommend using [Postico](https://apps.apple.com/us/app/postico/id1031280567?mt=12) to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`.
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal.
6. The `npm run client` command will open up a new browser tab for you!
4. If you would just like to run the build version run `npm start` and it will compile the whole project into a finished build and a run the server.

## Usage

- The user will first be brought to the sign-in/sign-up page
- After they sign-up and sign-in, they will be brought to the user home page 
- Then the user will begin the process of logging their emotion by clicking the log emotion button.
- They will first have the option of selecting 1 of the 8 primary emotions that will be displayed dialog popup on the screen.
- Each emotion will have a description of the emotion when they hover over the emotion to learn more and to best select the emotion that describes their state. 
- Once selected they will then have the option to select through a slider how intense they are feeling this emotion by moving a slider towards the term that best represents the emotion. 
- After that, they will be asked two simple questions, if they would like, to reflect, and to learn more about the why and the how of the emotion. 
- When they are finished they click finish.
- After they are done they will be brought back to the user page which will have all the data of past logs. This will display the emotions selected and any other relevant information along with the answers to the questions asked during the process.

## Built With

* 🩸,💦, & 😂 Also ❤️
* JavaScript
* Node
* React
* Postgresql
* Heroku
* Axios
* Bcryptjs
* Cookie-session
* Dotenv
* Express
* Passport
* Pg
* Prop-types
* React-dom
* React-redux
* React-router-dom
* React-scripts
* Redux
* Redux-logger
* Redux-saga
* Material-ui
* Nivo/Components
* MomentJS


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)