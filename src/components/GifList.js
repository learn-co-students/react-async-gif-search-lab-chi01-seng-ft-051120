import React from 'react'

const GifList = (props) => {
  const renderGifs = () => {
    return props.gifs.map(gif => {
      return (<li>
                <img src={gif.images.original.url} alt="gif"/>
              </li>)
    })
  }

  return (
        <ul id="gif-list">
            {renderGifs()}
        </ul>
    )
}

export default GifList