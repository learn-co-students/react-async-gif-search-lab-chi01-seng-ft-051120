import React, { Component } from "react"
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

  constructor() {
    super()
    this.state = {
      search: "",
      imgUrls: []
    }
  }

  
  
  
  componentDidMount(){
    if (this.state.search !== ""){
      let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`
      fetch(url)
      .then(resp => resp.json())
      .then(imgArr => {
        let justImg = []
        for(let i=0; i<3; i++) {
          justImg.push(imgArr.data[i].images.original.url) 
        }
        this.setState({
          imgUrls: justImg
        })
      })
    }
  }

  renderGifs = () => {
    return this.state.imgUrls.map((img, index) => {
      return(
        <GifList imgUrl={img} key={index} />
      )
    }) 
  }

  
  onSubmit = (event) => {
    event.preventDefault()
    let url = `https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`
      fetch(url)
      .then(resp => resp.json())
      .then(imgArr => {
        let justImg = []
        for(let i=0; i<3; i++) {
          justImg.push(imgArr.data[i].images.original.url) 
        }
        this.setState({
          imgUrls: justImg
        })
      })
  }

  onChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {

    return(
      <div>
        <GifSearch onSubmit={this.onSubmit} onChange={this.onChange}/>
        {this.renderGifs()}
      </div>
    )

  }

}