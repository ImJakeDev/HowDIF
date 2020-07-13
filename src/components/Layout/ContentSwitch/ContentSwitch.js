// React
import React, { Component } from "react";
// React Router DOM
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// Redux
import { connect } from "react-redux";
// Protected Components
import ProtectedRoute from "../../Utilities/ProtectedRoute/ProtectedRoute";
// Component Pages
import LandingPage from "../../Pages/LandingPage/LandingPage";
// import AboutPage from "../../Pages/AboutPage/AboutPage";
import UserPage from "../../Pages/UserPage/UserPage";
// import InfoPage from "../../Pages/InfoPage/InfoPage";
import LoginPage from "../../Pages/LoginPage/LoginPage";
import SignInPage from "../../Pages/SignInPage/SignInPage";
import SignUpPage from "../../Pages/SignUpPage/SignUpPage";
import RegisterPage from "../../Pages/RegisterPage/RegisterPage";

import PieChart from "../../Charts/PieChart/PieChart";
import RadarChart from "../../Charts/RadarChart/RadarChart";
import CalendarChart from "../../Charts/CalendarChart/CalendarChart";


class Content extends Component {
  componentDidMount() {
    this.props.dispatch({ type: "FETCH_USER" });
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />
          {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
          {/* <Route exact path="/about" component={AboutPage} /> */}
          <Route exact path="/landing" component={LandingPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/signup" component={SignUpPage} />
          {/* <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} /> */}
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
          <ProtectedRoute exact path="/home" component={UserPage} />
          {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
          {/* <ProtectedRoute exact path="/info" component={InfoPage} /> */}
          <ProtectedRoute exact path="/pie" component={PieChart} />
          <ProtectedRoute exact path="/radar" component={RadarChart} />
          <ProtectedRoute exact path="/calendar" component={CalendarChart} />
          {/* If none of the other routes matched, we will show a 404. */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(Content);