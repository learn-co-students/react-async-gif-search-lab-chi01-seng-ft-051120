import React, {Component} from 'react'

class GifSearch extends Component {
  constructor() {
    super()
    this.state = {
      query: ''
    }
  }

  handleInput = event => {
    this.setState({
      query: event.target.value
    })
  }

  handleSubmit = event => {
    const query = this.state.query 
    event.preventDefault()
    this.setState({
      query: ""
    })
    this.props.handleSearch(query)
  }

  render() {
    return (
      <div id="search-box">
        <form onSubmit={this.handleSubmit}>
          <p><strong>Enter search:</strong></p>
          <input type="text" onChange={this.handleInput} value={this.state.query} />
          <br></br>
          <input type="submit" />
        </form>
      </div>)
  }

}

export default GifSearch