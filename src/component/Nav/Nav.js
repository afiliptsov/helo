import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const nav = props => (
  <div>
    <Link to="/dashboard">
      <button>Home</button>
    </Link>
    <Link to="/new">
      <button>New Post</button>
    </Link>
    <Link to="/">
      <button>Log Out</button>
    </Link>
    <img src={props.profilePic} alt="" />
    <p>{props.userName}</p>
    {console.log("Props", props)}
  </div>
);

const mapStateToProps = state => ({
  userName: state.userName,
  userId: state.id,
  profilePic: state.profilePicture
});

export default connect(mapStateToProps)(nav);
