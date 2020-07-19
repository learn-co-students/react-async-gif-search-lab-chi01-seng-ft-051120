import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const URLFRONT = "https://api.giphy.com/v1/gifs/search?q="
const URLBACK = "&api_key=dc6zaTOxFJmzC&rating=g"

class GifListContainer extends Component {
    constructor() {
        super();
        this.state = {
            gifs: [] 
        }
    }

    handleSearch = query => {
        fetch(URLFRONT + query + URLBACK)
        .then(resp => resp.json())
        .then(gifs => {
            this.setState({
                gifs: gifs.data.slice(0, 3)
            })
        })
    }

    render(){
        return (
            <div>
            <GifList gifs={this.state.gifs}/>
            <GifSearch handleSearch={this.handleSearch}/>
            </div>
        )
    }


}

export default GifListContainer