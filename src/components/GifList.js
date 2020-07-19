import React from 'react'

const GifList = (props) => {

    const renderGifs = () => {
        return props.gifs.map(gif => {
            const imgSrc = gif.images.original.url
            return (<li>
                <img src={imgSrc} alt="gif"/>
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