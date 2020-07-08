import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import LogEmotionsButton from "../../Utilities/LogEmotionsButton/LogEmotionsButton";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <div>
      <center>
        <h2>How do you feel, {props.user.username}?</h2>
        <br />
        <LogEmotionsButton />
        <br />
      </center>
      <center>
        <br />
        <br />
        {props.user.id && (
          <div>
            <Link to="/radar">Emotional Radar</Link>
          </div>
        )}
      </center>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
