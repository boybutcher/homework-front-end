import React, { Component } from 'react';

class Thumbnail extends Component {
  
  render() {
    console.log('this.props: ', this.props);
    
    let {
      gif,
      index,
    } = this.props;

    return (
      <span className='Thumbnail' key={index}>
        <img src={gif.images.preview_gif.url} />
      </span>
    )
  }
}

export default Thumbnail;