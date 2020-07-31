import React, { Component } from "react";
import Story from "./Story";
import Header from "./Header";
import CharRow from "./CharRow";
import { AuthTokenContext } from "./AuthToken";
import "../css/App.css";
import { apiURL } from "../url";
let jwtDecode = require("jwt-decode");


const axios = require("axios");

class StoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: null,
      blurb: null,
      pov: null,
      setting: null,
      theme: null,
      created_ad: null,
      upvotes: null,
      downvotes: null,
      plot: null,
      user: null,
      owner: false
    };
  }

  componentDidMount = () => {
    const handle = this.props.match.params;
    axios.get(apiURL + "story/details/" + handle.handle).then(res => {
      this.setState({
        id: res.data.id,
        characters: res.data.characters,
        title: res.data.title,
        blurb: res.data.title,
        pov: res.data.pov,
        setting: res.data.setting,
        theme: res.data.theme,
        created_ad: res.data.created_at,
        upvotes: res.data.upvotes,
        downvotes: res.data.downvotes,
        plot: res.data.plot,
        user: res.data.user
      });
    })
    .then( ()=>{
      let token = this.context.authToken
      try {
        let decoded = jwtDecode(token)
        if(decoded.user_id === this.state.user){
          this.setState({
            owner: true
          })
        }
      } catch(err){}   
    }
  )
  };

  readMore() {
    let el = document.getElementsByClassName("story-paragraph d-block")[0];
    el.classList.remove("height");
  }

  render() {
    let characters = null;
    if (this.state.characters) {
      characters = this.state.characters.map((el, i) => {
        return <CharRow data={el} key={i} />
      });
    }

    return (
      <>
        <Header />
        {/* This is the code for the collapsable menu for details, characters, and plot */}
        <div className="center">
          <h1>StoryDetails</h1>
          <br />
          <h2>{this.state.title}</h2>
          <small>{this.state.user}</small>
          <div class="accordion" id="details-parent">
            <div class="card">
              <div class="card-header" id="heading-details">
                <h2 class="mb-0">
                  <button
                    class="btn btn-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#details"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Story Details
                  </button>
                </h2>
              </div>

              <div
                id="details"
                class="collapse"
                aria-labelledby="heading-details"
                data-parent="#details-parent"
              >
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <strong>Point of View:</strong> {this.state.pov}
                    </li>
                    <li class="list-group-item">
                      <strong>Theme:</strong> {this.state.theme}
                    </li>
                    <li class="list-group-item">
                      <strong>Setting:</strong> {this.state.setting}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="heading-characters">
                <h2 class="mb-0">
                  <button
                    class="btn btn-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#characters-table"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Character List
                  </button>
                </h2>
              </div>
              <div
                id="characters-table"
                class="collapse"
                aria-labelledby="heading-characters"
                data-parent="#details-parent"
              >
                <div class="card-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Character</th>
                        <th scope="col">Bio</th>
                      </tr>
                    </thead>
                    <tbody>{characters}</tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="heading-plot">
                <h2 class="mb-0">
                  <button
                    class="btn btn-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#plot"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Story Plot
                  </button>
                </h2>
              </div>
              <div
                id="plot"
                class="collapse"
                aria-labelledby="heading-plot"
                data-parent="#details-parent"
              >
                <div class="card-body">{this.state.plot}</div>
              </div>
            </div>
          </div>
        </div>
        {/* end of the collapsable menu code */}
        <h2 className="center">Story thus far ...</h2>
        <div className="story center">
          {/* start of the actual story thus far code  */}

          <Story readMore={this.readMore} {...this.state} />
        </div>
      </>
    );
  }
}

StoryDetails.contextType = AuthTokenContext;
export default StoryDetails;
