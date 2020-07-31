import React from "react";
import "../css/App.css";
import Header from "./Header";
import idea from "../images/idea4.jpg";
import author from "../images/typewriter-2.jpg";
import reader from "../images/Bookworm vector 3.jpg";

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="center">
        <h1>StoryBoard</h1>
        <h5>Collaborative Storytelling.</h5>
        <p>Storyboard is a place where creatives, authors, and readers can come together to turn ideas into wonderful stories.  If he ever had an idea for a story, but don't consider yourself and author, create a plot pitch below and let others write while you direct the storyline.  If you are a creative author, browse our plot pitches to find something you would like to contribute to.  If you're an avid reader, or just like seeing great collaboration come together, check out the works in progress or finished works to see what great content is being produced.</p>
      </div>
      <div className="main-menu">
        <div className="card-group">
          <div class="card main-card">
            <img src={idea} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Narrators</h5>
              <p class="card-text">
                Have and idea for a story-line? Fill out our plot form to get it
                started!
              </p>
            </div>
            <div class="card-footer">
              <a
                href="/#"
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#plot-modal"
              >
                Become a Narrator
              </a>
            </div>
          </div>
          <div class="card main-card">
            <img src={author} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Authors</h5>
              <p class="card-text">
                Want to contribute to a story? Write and share your idea for a
                story line or submit your contribution to be added to the
                storyline.
              </p>
            </div>
            <div class="card-footer">
              <a href="/stories" class="btn btn-primary">
                Become a Author
              </a>
            </div>
          </div>
          <div class="card main-card">
            <img src={reader} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Readers</h5>
              <p class="card-text">
                Love Reading? Check out some of the finished works, or read some
                unfinished works and help vote on how the story should go.
              </p>
            </div>
            <div class="card-footer">
              <a href="/stories" class="btn btn-primary">
                Become a Reader
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <h2>How it works</h2>
        <p>
          StoryBoard is a collaboration of Narrators, Authors, and Readers. If
          you have an idea for a story, become a narrator to write the plot,
          setting, character list, and put it out there for others to
          collaborate and contribute to. Authors are able to read and find plots
          that interest them, and draft pieces of the story for submission to
          continue the story along. Narrators choose which draft they love the
          most to add it to their story! Readers get to vote on which draft they
          love the most!
        </p>
      </div>
    </div>
  );
}

export default Home;
