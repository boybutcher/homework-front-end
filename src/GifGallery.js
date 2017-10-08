import React, { Component } from 'react';
import Modal from './Modal';
import Thumbnail from './Thumbnail';
import './GifGallery.css';

class GifGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      offset: 0,
      selected: null,
      modalOpen: false,
    }

    this.selectImage = this.selectImage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.getTrending = this.getTrending.bind(this);
  }

  selectImage(index) {
    this.setState({
      selected: index,
      modalOpen: true,
    })
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  getTrending(offset = 0) {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=ErgAmxc7tbRDVkRNPuvIuLoNd3mJWW3B&limit=5&offset=${offset}`)
      .then(response => (
        response.json()
      ))
      .then(json => {
        const {
          gifs,
          offset,
        } = this.state;

        const updatedGifs = [...gifs].concat(json.data);
        const nextOffset = offset + 5;

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
    const {
      gifs,
      selected,
      modalOpen
    } = this.state

    return (
      <div className="GifGallery">
        <Modal
          modalOpen={modalOpen}
          selectedImage={gifs[selected]}
          toggleModal={this.toggleModal}
        />

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
