import React, { Component } from "react";
import Header from "./Header";
import StoryCard from "./StoryCard"
import { apiURL } from '../url'

import "../css/App.css";
const axios = require("axios")


class StoryList extends Component {
  constructor(){
    super()
    this.state = {
      library: []
    }
  }

  componentDidMount = () => {
    // let jwt = localStorage.getItem("authToken")
    // const headers = {
    //   'Authorization': "Bearer " + jwt
    // }
    axios
      .get( apiURL + "stories/")
      // , {
      //   headers: headers
      // })
      .then(res => {
        this.setState({library: res.data})
      })
  };

  render() {
    return (
      <>
        <Header />
        <div className="center">
          <h1>StoryBoard</h1>
          <h5>Library</h5>
          <button type="button" class="btn btn-light">Finished Stories</button>
          <button type="button" class="btn btn-light">Stories in Progress</button>
          <button type="button" class="btn btn-light">All Stories</button>
        </div>
        <div className="library-list">
          {this.state.library.map((el, i) => {
            return <StoryCard library={el} key={i} />
          })}
        </div>
      </>
    );
  }
}

export default StoryList;
