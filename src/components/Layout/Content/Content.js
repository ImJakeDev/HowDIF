// React
import React, { Component } from "react";
// React Router DOM
import {
  HashRouter as Router,
} from "react-router-dom";
// Components
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ContentSwitch from "../ContentSwitch/ContentSwitch"

import "./Content.css";

class Content extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <ContentSwitch/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Content;
