import React, { Component } from "react";
import { AuthTokenContext } from "./AuthToken";
import "../css/App.css";
let jwtDecode = require("jwt-decode");

class SubmissionCard extends Component {
  render(){
  let addButton = null
  let token = this.context.authToken
  try {
    let decoded = jwtDecode(token)
    if(decoded.user_id === this.props.data.user){
      addButton = <button>+</button>
    }
  } catch(err){} 
  
  return (
    <div class="card center">
      <div class="card-body">
        <h5 class="card-title">{this.props.data.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {this.props.data.blurb}
        </h6>
        <p class="card-text"></p>
        <a
          href="/story/details"
          class="card-link"
          data-toggle="modal"
          data-target="#submission-modal"
        >
          Story Details
        </a>
        <br/>
        <i class="fas fa-arrow-up vote"></i>
        <span className="votes">{this.props.data.upvotes}</span>
        <i class="fas fa-arrow-down vote"></i>
        <span className="votes">{this.props.data.downvotes}</span>
        <span className="add-to-story">{addButton}</span>
      </div>
    </div>
  )}
}
SubmissionCard.contextType = AuthTokenContext;

export default SubmissionCard;
