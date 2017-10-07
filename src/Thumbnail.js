import React, { Component } from 'react';
import './Thumbnail.css';

class Thumbnail extends Component {
  
  render() {
    let {
      gif,
      index,
      selectImage,
    } = this.props;

    let thumbnailImage = {
      backgroundImage: `url('${gif.images.preview_gif.url}')`,
    }

    return (
      <span 
        className='Thumbnail' 
        style={thumbnailImage}
        onClick={() => selectImage(index)}
      >
      </span>
    )
  }
}

export default Thumbnail;