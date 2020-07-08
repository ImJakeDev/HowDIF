// React
import React from "react";
// React Router DOM
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <h1>HowDIF</h1>
      <ul>
        <li>
          HowDIF is a tool that helps you understand yourself and helps identify
          the emotions you are feeling. Your feelings and emotions are valid.
          You deserve to understand them better.
        </li>
        <li>
          HowDIF provides the process to dig deeper into your emotions, and the
          data to analyze these emotions.
        </li>
        <li>
          With this app you will explore your emotions deeper which will empower
          you to understand your emotions.
        </li>
      </ul>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default LandingPage;
