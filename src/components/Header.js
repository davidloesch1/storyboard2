import React, { Component } from "react";
import { AuthTokenContext } from "./AuthToken";
import "../css/App.css";


class Header extends Component {

  render() {
    if (this.context.authToken === null) {
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            StoryBoard
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/stories">
                  Browse Stories
                </a>
              </li>
            </ul>

          </div>           
          <div>
            <button
              type="button"
              class="btn btn-light"
              data-toggle="modal"
              data-target="#login-modal"
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-light"
              data-toggle="modal"
              data-target="#signup-modal"
            >
              Signup
            </button>
          </div>
           
        </nav>
      );
    } else {
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/">
            StoryBoard
          </a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/stories">
                  Browse Stories
                </a>
              </li>
            </ul>
            <button
              type="button"
              class="btn btn-light"
              onClick={this.context.logout}
            >
              Logout
            </button>
          </div>
        </nav>
      );
    }
  }
}

Header.contextType = AuthTokenContext;
export default Header;
