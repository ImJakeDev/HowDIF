// React
import React from "react";
// React Router DOM imports
import { HashRouter as Router } from "react-router-dom";
// Component imports
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ContentSwitch from "../ContentSwitch/ContentSwitch";

// Content component is the start of the router and where Nav and Footer is at and all other content will be in between
const Content = () => {
  return (
    <Router>
      <Nav />
      <ContentSwitch />
      <Footer />
    </Router>
  );
};

export default Content;
