import React, { Component } from 'react';
import '../styles/Thumbnail.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewing: false
    }
    this.togglePreview = this.togglePreview.bind(this);
  }

  togglePreview() {
    this.setState({
      previewing: !this.state.previewing,
    })
  }

  render() {
    let {
      gif,
      index,
      selectImage,
    } = this.props;

    let thumbnailImage = this.state.previewing ? {
      backgroundImage: `url('${gif.images.preview_gif.url}')`,
    } : {
      backgroundImage: `url('${gif.images.original_still.url}')`
    }

    return (
      <span 
        className='Thumbnail' 
        style={thumbnailImage}
        onClick={() => selectImage(index)}
        onMouseEnter={this.togglePreview}
        onMouseLeave={this.togglePreview}
      >
      </span>
    )
  }
}

export default Thumbnail;