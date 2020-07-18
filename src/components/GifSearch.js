import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.queryGifs(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="query"
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default GifSearch;
