import React from "react";
import "../css/App.css";

function StoryCard(props) {
  return (
    <div class="card center">
      <div class="card-body">
        <h5 class="card-title">{props.library.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          {props.library.blurb}
        </h6>
        <p class="card-text preview"></p>
        <a href={'/story/details/' + props.library.id} class="card-link" plotId={props.library.id}>
          Story Details
        </a>
        <br />
        <br />
        <i class="fas fa-arrow-up vote"></i>
        <span className="votes">{props.library.upvotes}</span>
        <i class="fas fa-arrow-down vote"></i>
        <span className="votes">{props.library.downvotes}</span>
      </div>
    </div>
  );
}

export default StoryCard;
