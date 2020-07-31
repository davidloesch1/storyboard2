import React, { Component } from "react";
import { AuthTokenContext } from "./AuthToken";
import "../css/App.css";
import { apiURL } from '../url'

const axios = require("axios");

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      blurb: "",
      submission: "",
      chapter: 1
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = e => {
    console.log(this.props);
    const headers = {
      Authorization: "Bearer " + this.context.authToken
    };
    let payload = {
      plot: this.props.id,
      title: this.state.title,
      blurb: this.state.blurb,
      addition: this.state.submission,
      chapter: this.state.chapter
    };
    console.log(payload);
    axios
      .post( apiURL + "submissions/", payload, {
        headers: headers
      })
      .then(
        this.setState({
          title: "",
          blurb: "",
          submission: "",
          chapter: 0
        })
      );
  };
  render() {
    if (this.context.authToken === null) {
      return (
        <div class="modal" tabindex="-1" role="dialog" id="add-form">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Login Required</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>You need to be logged in.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-light"
                  data-toggle="modal"
                  data-target="#login-modal"
                  data-dismiss="modal"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          class="modal fade"
          id="add-form"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addForm">
                  Submission Form
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="submissionTitle">Entry Title</label>
                    <input
                      onChange={this.handleChange}
                      value={this.state.title}
                      name="title"
                      class="form-control"
                      id="submissionTitle"
                      aria-describedby="titleHelp"
                      placeholder="Crows and Cowards"
                    />
                    <small id="titleHelp" class="form-text text-muted">
                      This is going to be the Chapter Title for your entry.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="submissionBlurb">One Line Summary</label>
                    <input
                      name="blurb"
                      onChange={this.handleChange}
                      value={this.state.blurb}
                      class="form-control"
                      id="submissionBlurb"
                      aria-describedby="blurbHelp"
                      placeholder="Dr. Strangejoy meets his mysterious nemesis."
                    />
                    <small id="blurbHelp" class="form-text text-muted">
                      Give readers a quick summary of your entry. It may help to
                      write this last.
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="addSubmission">Example textarea</label>
                    <textarea
                      value={this.state.submission}
                      name="submission"
                      class="form-control"
                      id="addSubmission"
                      rows="4"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary"
                    href="/stories"
                    data-dismiss="modal"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

AddModal.contextType = AuthTokenContext;
export default AddModal
