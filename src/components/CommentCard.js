import React from "react";
import "../css/App.css";

function CommentCard() {
  return (
    <div class="card center">
      <div class="card-body">
        <p class="card-text">
            This story was amazing! can't wait to see where it goes!
        </p>
        <small className="text-muted">username</small>
        <br/>
      <i class="fas fa-arrow-up vote"></i>
        <span className="votes">100</span>
        <i class="fas fa-arrow-down vote"></i>
        <span className="votes">100</span>
      </div>
    </div>
  );
}

export default CommentCard
