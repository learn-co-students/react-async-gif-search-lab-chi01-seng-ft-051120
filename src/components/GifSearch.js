import React, { Component } from 'react'

export default class GifSearch extends Component {

  render(){

    

    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" id="search" onChange={this.props.onChange} ></input>
          <input type={"submit"} value="Search"></input>
        </form>
      </div>
    ) 
  }
}