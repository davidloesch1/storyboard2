import React, { Component } from "react";
import { apiURL } from "../url";

import "../css/App.css";
const axios = require("axios");

class SignupModal extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      first: "",
      last: "",
    };
  }

  signup = () => {
    if (this.state.password !== this.state.confirmPassword) {
      alert("passwords don't match!");
    } else {
      let payload = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        first: this.state.first,
        last: this.state.last,
      };
      axios.post(apiURL + "user/signup/", payload);
    }
  };
  handleChange = (e) => {
    // this.checkPasswords()
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearForm = () => {
    this.setState({
      username: "",
      password: "",
      email: "",
      first: "",
      last: "",
    });
  };

  render() {
    function validate(password, confirmPassword) {
      if (password !== confirmPassword) {
        return (
          <small id="passwordWarning" class="form-text" style={{color: "red"}}>
            Passwords do not match!
          </small>
        );
      }
      return null
    }

    const errors = validate(this.state.password, this.state.confirmPassword);
    const isEnabled = !errors && this.state.email.length > 0 && this.state.username.length > 0 && this.state.password === this.state.confirmPassword

    return (
      <div
        class="modal fade"
        id="signup-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Signup
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={this.clearForm}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div className="form-group">
                  <div class="row">
                    <div class="col">
                      <label for="first">First Name</label>

                      <input
                        id="first"
                        name="first"
                        value={this.state.first}
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div class="col">
                      <label for="last">Last Name</label>

                      <input
                        id="last"
                        name="last"
                        value={this.state.last}
                        onChange={this.handleChange}
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <ul>
                    <li>
                      <small className={(this.state.email.indexOf("@") >= 0 ? "text-success" : "text-danger")}>email must contain the "@" sign</small>
                    </li>
                    <li>
                      <small className={(this.state.email.length >= 6 ? "text-success" : "text-danger")}>email must be minimum 6 characters</small>
                    </li>
                  </ul>
                  <input
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="username">Username</label>
                  <ul>
                    <li>
                    <small className={(this.state.username.length >= 6 ? "text-success" : "text-danger")}>username must be minimum 6 characters</small>
                    </li>
                  </ul>
                  <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    type="username"
                    class="form-control"
                    id="username"
                    aria-describedby="usernameHelp"
                  />
                  <small id="usernameHelp" class="form-text text-muted">
                    This is what appears on submissions and plots you create.
                    Others will see this.
                  </small>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <ul>
                    <li>
                    <small className={(this.state.password.length >= 6 ? "text-success" : "text-danger")}>password must be minimum 6 characters</small>
                    </li>
                  </ul>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    class="form-control"
                    id="password"
                  />
                </div>
                <div class="form-group">
                  <label for="confirm-password">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    type="password"
                    class="form-control"
                    id="confirm-password"
                  />
                  {errors}
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                disabled={!isEnabled}
                type="submit"
                class="btn btn-primary"
                onClick={this.signup}
                data-toggle="modal"
                data-target="#login-modal"
                data-dismiss="modal"
              >
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupModal;
