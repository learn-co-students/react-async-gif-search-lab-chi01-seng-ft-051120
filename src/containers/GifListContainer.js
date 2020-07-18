import React, { Component } from "react";
import GifList from "../components/GifList.js";
import GifSearch from "../components/GifSearch.js";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  populateState = (gifData) => {
    const threeGifs = [];
    for (let i = 0; i < 3; i++) {
      threeGifs.push(gifData.data[i]);
    }

    this.setState({
      gifs: threeGifs,
    });
  };

  queryGifs = (query) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;

    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((gifData) => {
        this.populateState(gifData);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <GifSearch queryGifs={this.queryGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
