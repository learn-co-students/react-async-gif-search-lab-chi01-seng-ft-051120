import React, { Component } from 'react'

export default class GifList extends Component {

  render() {
    return(
      <div>
        <ul>
        <li><img src={this.props.imgUrl} height={200} alt={"cat gif"} /></li>
        </ul>
      </div>
      
    )
  }

}