import React, { Component } from "react";
import axios from "axios";
import { axiosWithAuth } from "../api/axiosWithAuth";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    isLoading: false,
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  submitLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", {
        username: "Lambda School",
        password: "i<3Lambd4",
      })
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch((err) => {
        console.log("There was an error", err);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitLogin}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;
