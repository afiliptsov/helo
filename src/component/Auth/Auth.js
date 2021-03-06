import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../../ducks/reducer.js";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.onUserNameChangeHandler = this.onUserNameChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
  }

  onUserNameChangeHandler(e) {
    this.setState({
      username: e.target.value
    });
  }
  onPasswordChangeHandler(e) {
    this.setState({
      password: e.target.value
    });
  }

  login(user_name, user_password) {
    if (!user_name || !user_password) {
      alert("Data what you entered is invalid");
      return false;
    }
    axios.post("api/login", { user_name, user_password }).then(res => {
      const { id, user_name, user_picture } = res.data[0];
      console.log("User Data", res.data);
      res.status == 200
        ? (this.props.getUser(id, user_name, user_picture),
          this.props.history.push("/dashboard"))
        : console.log("False");
    });
  }

  createAccount(user_name, user_password) {
    if (!user_name || !user_password) {
      alert("Data what you entered is invalid");
      return false;
    }
    axios.post("/api/createUser", { user_name, user_password }).then(res => {
      res.status == 200
        ? this.props.history.push("/dashboard")
        : console.log("False");
    });
  }

  render() {
    return (
      <div>
        {console.log(this.state.username)}
        <input
          type="text"
          placeholder="username"
          onChange={this.onUserNameChangeHandler}
        />
        <input
          type="text"
          placeholder="password"
          onChange={this.onPasswordChangeHandler}
        />
        <button
          onClick={() => this.login(this.state.username, this.state.password)}
        >
          Login
        </button>
        <button
          onClick={() =>
            this.createAccount(this.state.username, this.state.password)
          }
        >
          Register
        </button>

        <div className="floatElement">Just a float</div>
        <audio controls />
        <video width="320" height="240" controls />

        <div>I am inline</div>
      </div>
    );
  }
}

export default connect(
  null,
  { getUser }
)(Auth);
