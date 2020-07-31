import React, { Component } from "react";
import { AuthTokenContext } from "./AuthToken";
import { apiURL } from "../url";
import "../css/App.css";

const axios = require("axios");

const reset = {
  title: "",
  blurb: "",
  pov: "first",
  setting: "",
  theme: "",
  characters: [],
  plot: ""
};

class PlotModalForm extends Component {
  constructor() {
    super();
    this.state = reset;
  }

  handleChange = e => {
    if (
      e.target.getAttribute("char") === "name" ||
      e.target.getAttribute("char") === "bio"
    ) {
      let characters = [...this.state.characters];
      characters[e.target.dataset.id][e.target.getAttribute("char")] =
        e.target.value;
      this.setState({ characters });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addCharacter = e => {
    e.preventDefault();
    this.setState(prevState => ({
      characters: [...prevState.characters, { name: "", bio: "" }]
    }));
  };

  handleSubmit = e => {
    const headers = {
      Authorization: "Bearer " + this.context.authToken
    };
    let payload = {
      title: this.state.title,
      blurb: this.state.blurb,
      pov: this.state.pov,
      setting: this.state.setting,
      theme: this.state.theme,
      characters: this.state.characters,
      plot: this.state.plot
    };
    axios
      .post(apiURL + "plots/", payload, {
        headers: headers
      })
      .then(
        this.setState({
          reset
        })
      );
  };

  render() {
    if (this.context.authToken === null) {
      return (
        <div class="modal" tabindex="-1" role="dialog" id="plot-modal">
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
          id="plot-modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="plot-title"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-xl"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="plot-title">
                  Plot Form
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
                  {/* Title Input */}
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input
                      name="title"
                      type="text"
                      class="form-control"
                      id="title"
                      placeholder="If you don't have a title, put 'Working title' and update later!"
                      value={this.state.title}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Blurb Input */}
                  <div class="form-group">
                    <label for="blurb">One Line Blurb</label>
                    <input
                      name="blurb"
                      type="text"
                      class="form-control"
                      id="blurb"
                      placeholder="This is what readers see when browsing the library, make it catchy! (i.e.: 'Cold War spy thriller with betrayal, passion, and suspenseful intrigue!')"
                      value={this.state.blurb}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* POV Input */}
                  <div class="form-group">
                    <label for="pov">Point of View</label>
                    <p>Who's Telling the Story?'</p>
                    <div class="form-check">
                      <select
                        name="pov"
                        class="form-control"
                        id="exampleFormControlSelect1"
                        value={this.state.pov}
                        onChange={this.handleChange}
                      >
                        <option value="N/A">
                          N/A - In works that don't have a point of view (Like
                          Poetry)
                        </option>
                        <option value="First">
                          1st Person - Think "I, We, Us"
                        </option>
                        <option value="Second">
                          2nd Person - "You" (2nd person is rare)
                        </option>
                        <option value="Third">
                          3rd Person - Think Omnipotence, like Morgan Freeman
                          narrating your life
                        </option>
                      </select>
                    </div>
                  </div>
                  {/* Setting Input */}
                  <div class="form-group">
                    <label for="formGroupExampleInput">Setting</label>
                    <p>Be sure to include:</p>
                    <ul>
                      <li>Time</li>
                      <li>Place</li>
                      <li>Tone</li>
                    </ul>
                    <textarea
                      name="setting"
                      class="form-control"
                      id="setting"
                      rows="3"
                      placeholder="1943, England, Middle of World War II, tensions were high..."
                      value={this.state.setting}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  {/* Theme Input */}
                  <div class="form-group">
                    <label for="theme">Overall Theme</label>
                    <p>
                      Consider the theme to be the genre of your story. Is it an
                      Action Story? Romance? Let your authors know!
                    </p>
                    <input
                      name="theme"
                      type="text"
                      class="form-control"
                      id="theme"
                      placeholder="Fairytale Adventure"
                      value={this.state.theme}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* Character Input */}
                  <div class="form-group">
                    <label for="character">Characters</label>
                    <p>
                      Add Characters and a quick bio. The bio should be anything
                      relevant you want your authors to know, Or, let your
                      authors develop the characters!
                    </p>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.addCharacter}
                    >
                      Add New Character
                    </button>
                    {this.state.characters.map((el, i) => {
                      let characterId = `character-${i}`,
                        bioId = `bio-${i}`;
                      return (
                        <div class="card char-card" key={i}>
                          <div class="card-body">
                            <label htmlFor={characterId}>
                              {`Character ${i + 1}`}
                            </label>
                            <input
                              id={characterId}
                              name={characterId}
                              data-id={i}
                              type="text"
                              char="name"
                              class="form-control name"
                              placeholder="Captain Jack Nelson"
                              value={this.state.characters[i].name}
                              onChange={this.handleChange}
                            />
                            <label htmlFor={bioId}>Bio</label>
                            <textarea
                              id={bioId}
                              data-id={i}
                              name={bioId}
                              type="text"
                              char="bio"
                              class="form-control bio"
                              placeholder="Weathered old captain with a rough exterior but a soft heart ..."
                              value={this.state.characters[i].name.bio}
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div class="form-group">
                    <label for="plot">Plot</label>
                    <p>
                      Ah yes, the plot! Make it as short or long as you'd like.
                      Think of a book or movie summary, the goal is to have
                      authors write your story, but sticking to your plot idea.
                      Have fun with it, you can always change it later!
                    </p>
                    <p>Remember, great stories have the following:</p>
                    <ul>
                      <li>
                        <b>Exposition</b>: Setting the scene
                      </li>
                      <li>
                        <b>Rising Action</b>: Building the tension
                      </li>
                      <li>
                        <b>Climax</b>: The exciting part
                      </li>
                      <li>
                        <b>Falling Action</b>: Cleaning up loose ends
                      </li>
                      <li>
                        <b>Resolution</b>: Ending the Story
                      </li>
                    </ul>
                    <textarea
                      name="plot"
                      class="form-control"
                      id="plot"
                      rows="5"
                      placeholder="Spy thriller with a lead female character that is tasked with infiltrating deep undercover into enemy territory ..."
                      value={this.state.plot}
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-primary"
                  href="/stories"
                  data-dismiss="modal"
                  onClick={this.handleSubmit}
                >
                  Submit Story
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

PlotModalForm.contextType = AuthTokenContext;
export default PlotModalForm;
