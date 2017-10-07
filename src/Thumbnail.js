import React, { Component } from 'react';
import './Thumbnail.css';

class Thumbnail extends Component {
  
  render() {
    console.log('this.props: ', this.props);
    
    let {
      gif,
      index,
    } = this.props;

    let thumbnailImage = {
      backgroundImage: `url('${gif.images.preview_gif.url}')`,
    }

    console.log('thumbnailImage: ', thumbnailImage);

    return (
      <span className='Thumbnail' key={index} style={thumbnailImage}>
      </span>
    )
  }
}

export default Thumbnail;