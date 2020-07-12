import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LogEmotionsButton from "../../Utilities/LogEmotionsButton/LogEmotionsButton";

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => {

  const { dispatch } = props;

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    dispatch({ type: "FETCH_PIE_DATA" });
    dispatch({ type: "FETCH_RADAR_DATA" });
  }, [dispatch]);

  return (
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
              <div>
                <Link to="/pie">Emotion Pie</Link>
              </div>
              <br />
              <br />
              <div>
                <Link to="/radar">Emotional Radar</Link>
              </div>
              <br />
              <br />
              <div>
                <Link to="/calendar">Emotions to Date</Link>
              </div>
            </div>
          )}
        </center>
      </div>
    </div>
  );
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
