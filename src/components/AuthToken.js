import React, { Component } from "react";
let jwtDecode = require("jwt-decode");

export const AuthTokenContext = React.createContext();

class AuthTokenProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_token: null
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("authToken");
    try {
      let decoded = jwtDecode(token);
      if (decoded.exp > Date.now().valueOf() / 1000) {
        this.setState({
          auth_token: token
        });
      }
    } catch (err) {}
  };

  login = new_auth_token => {
    this.setState({
      auth_token: new_auth_token
    });
    localStorage.setItem("authToken", new_auth_token);
  };

  logout = () => {
    this.setState({
      auth_token: null
    });
    localStorage.setItem("authToken", null);
  };

  render() {
    return (
      <AuthTokenContext.Provider
        value={{
          authToken: this.state.auth_token,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthTokenContext.Provider>
    );
  }
}

export default AuthTokenProvider;
