import React, {Component} from 'react'

class GifSearch extends Component {
    constructor() {
        super();
        this.state = {
            query: ""
        }
    }

    handleInput = event => {
        const input = event.target.value
        this.setState({
            query: input
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const query = this.state.query 
        this.setState({
            query: ""
        })
        this.props.handleSearch(query)
    }

    render() {
        return (
            <div id="search-box">
                <form onSubmit={this.handleSubmit}>
            <p><strong>Enter a search term:</strong></p>
            <input type="text" onChange={this.handleInput} value={this.state.query} />
            <br></br>
            <input type="submit" />
            </form>
            </div>
        )
    }
}

export default GifSearch