import React, { Component } from "react";
import "../css/App.css";
import { AuthTokenContext } from "./AuthToken";
import { apiURL } from '../url'
const axios = require("axios");


class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  login = () => {
    axios
      .post(apiURL + "user/login/", this.state)
      .then(res => this.context.login(res.data.token));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div
        class="modal fade"
        id="login-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Login
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="/login" method="post">
                <div class="form-group">
                  <label for="username">Username</label>
                  <input
                    name="username"
                    type="username"
                    class="form-control"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <small class="form-text text-muted">
                    Don't have an account? Signup for one.
                  </small>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                value="login"
                class="btn btn-primary"
                onClick={this.login}
                data-dismiss="modal"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginModal.contextType = AuthTokenContext;
export default LoginModal;
