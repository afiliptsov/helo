import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

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
      res.status == 200
        ? this.props.history.push("/dashboard")
        : console.log("False");
      console.log("User Data", res.data[0]);
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
      </div>
    );
  }
}

export default Auth;
