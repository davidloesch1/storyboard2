import React, { Component } from "react";
import AddModal from "./AddModal";
import PagesTab from "./PagesTab";
import SubmissionCard from "./SubmissionCard";
import CommentCard from "./CommentCard";
import SubmissionModal from "./SubmissionModal";
import { apiURL } from '../url'
import "../css/App.css";
const axios = require("axios");

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: 1,
      chapters: []
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      axios
        .get( apiURL + "submissions/" + this.props.id)
        .then(res => {
          this.setState({
            chapters: res.data
          });
        });
    }
  }

  nextChapter = () => {
    this.setState({
      currentChapter: this.state.currentChapter + 1
    });
  };
  prevChapter = () => {
    this.setState({
      currentChapter: this.state.currentChapter - 1
    });
  };

  goToChap = e => {
    this.setState({
      currentChapter: parseInt(e.target.innerHTML)
    });
  };

  render() {
    let chapter = this.state.currentChapter;

    let chapterSubmissions = this.state.chapters.filter(
      x => x.chapter === chapter
    );

    let chapters = this.state.chapters;
    chapters = chapters.map(el => el.chapter);
    chapters = [...new Set(chapters)];
    chapters = chapters.sort((a, b) => a - b);
    let pageTabs = chapters.map((el, i) => (
      <PagesTab num={el} key={i} goTo={this.goToChap} />
    ));
    let selected = chapterSubmissions.find(x => x.selected === true);
    let alternates = chapterSubmissions.filter(x => x.selected === false);
    console.log(alternates)
    alternates = alternates.map((el, i) => {
      return <SubmissionCard data={el} key={i} />;
    });
    if (!selected) {
      return (
        <>
          <div className="story-body">
            <h3>This is all that is written</h3>
            <h6>Help write the rest of the story!</h6>
            <a
              href="/#"
              type="button"
              class="btn btn-secondary"
              data-toggle="modal"
              data-target="#add-form"
            >
              Add to Story
            </a>
            <AddModal {...this.props} />
          </div>

          {/* start of the navigation pagination */}

          <div className="center pagination">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a
                    class="page-link"
                    href="/#"
                    aria-label="Previous"
                    onClick={this.prevChapter}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {pageTabs}
                <li class="page-item">
                  <a
                    class="page-link"
                    href="/#"
                    aria-label="Next"
                    onClick={this.nextChapter}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="submissions-tab"
                  data-toggle="tab"
                  href="#submissions"
                  role="tab"
                  aria-controls="submissions"
                  aria-selected="true"
                >
                  Storyline Submissions
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="comments-tab"
                  data-toggle="tab"
                  href="#comments"
                  role="tab"
                  aria-controls="comments"
                  aria-selected="false"
                >
                  Comments
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="submissions"
                role="tabpanel"
                aria-labelledby="submissions-tab"
              >
                {alternates}
              </div>
              <div
                class="tab-pane fade"
                id="comments"
                aria-labelledby="comments-tab"
              >
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
              </div>
            </div>
          </div>

          <SubmissionModal />
        </>
      );
    } else {
      return (
        <>
          <div className="story-body">
            <h3>{selected.title}</h3>
            <small class="text-muted">{selected.blurb}</small>

            <p className="story-paragraph d-block height">
              {selected.addition}
            </p>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={this.props.readMore}
            >
              Read More
            </button>
            <br />
          </div>
          <div className="center pagination">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a
                    class="page-link"
                    href="/#"
                    aria-label="Previous"
                    onClick={this.prevChapter}
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {pageTabs}
                <li class="page-item">
                  <a
                    class="page-link"
                    href="/#"
                    aria-label="Next"
                    onClick={this.nextChapter}
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="submissions-tab"
                  data-toggle="tab"
                  href="#submissions"
                  role="tab"
                  aria-controls="submissions"
                  aria-selected="true"
                >
                  Storyline Submissions
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="comments-tab"
                  data-toggle="tab"
                  href="#comments"
                  role="tab"
                  aria-controls="comments"
                  aria-selected="false"
                >
                  Comments
                </a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="submissions"
                role="tabpanel"
                aria-labelledby="submissions-tab"
              >
                {alternates}
              </div>
              <div
                class="tab-pane fade"
                id="comments"
                aria-labelledby="comments-tab"
              >
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
                <CommentCard />
              </div>
            </div>
          </div>

          <SubmissionModal />
        </>
      );
    }
  }
}

export default Story;
