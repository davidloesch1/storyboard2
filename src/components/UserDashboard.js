import React from "react";
import "../css/App.css";
import Header from "./Header";
import DashNav from "./DashNav";
import StoryCard from "./StoryCard";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function UserDashboard(props) {
  return (
    <>
      <Header />
      <DashNav />
      <div className="center">
        <h1>StoryBoard</h1>
        <h5>Library</h5>
        <button type="button" class="btn btn-light">
          Finished Stories
        </button>
        <button type="button" class="btn btn-light">
          Stories in Progress
        </button>
        <button type="button" class="btn btn-light">
          All Stories
        </button>
      </div>
      <div className="library-list">
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
        <StoryCard />
      </div>
    </>
  );
}

export default UserDashboard;
