import React, { Component } from 'react';

class GifGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      offset: 0,
    }

    this.getTrending = this.getTrending.bind(this);
  }

  getTrending(offset = 0) {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=ErgAmxc7tbRDVkRNPuvIuLoNd3mJWW3B&limit=5&offset=${offset}`)
      .then(response => (
        response.json()
      )).then(json => {
        let nextOffset = this.state.offset + 5;
        this.setState({
          gifs: json.data,
          offset: nextOffset,
        });
      })
  }


  componentWillMount() {
    this.getTrending(this.state.offset);
  }

  render() {
    return (
      <div className="GifGallery">
        GIF gallery
      </div>
    );
  }
}

export default GifGallery;
