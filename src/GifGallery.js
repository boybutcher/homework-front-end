import React, { Component } from 'react';

import Thumbnail from './Thumbnail';

class GifGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      offset: 0,
      selected: null,
    }

    this.selectImage = this.selectImage.bind(this);
    this.getTrending = this.getTrending.bind(this);
  }

  selectImage(index) {
    this.setState({
      selected: index,
    })
  }

  getTrending(offset = 0) {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=ErgAmxc7tbRDVkRNPuvIuLoNd3mJWW3B&limit=5&offset=${offset}`)
      .then(response => (
        response.json()
      ))
      .then(json => {
        let {
          gifs,
          offset,
        } = this.state;

        let updatedGifs = [...gifs].concat(json.data);
        let nextOffset = offset + 5;

        this.setState({
          gifs: updatedGifs,
          offset: nextOffset,
        });
      })
      .catch(error => {
        console.error('error: ', error);
      }) 
  }

  componentDidMount() {
    this.getTrending(this.state.offset);
  }

  render() {
    let {
      gifs,
    } = this.state

    return (
      <div className="GifGallery">
        <div>
          <button onClick={() => this.getTrending(this.state.offset)}>
            more images
          </button>
        </div>
        {gifs.map((gif, index) => (
          <Thumbnail 
            gif={gif} 
            key={index}
            index={index}
            selectImage={this.selectImage} 
          />
        ))}
      </div>
    );
  }
}

export default GifGallery;
