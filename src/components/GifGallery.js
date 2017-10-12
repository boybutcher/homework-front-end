import React, { Component } from 'react';
import Modal from './Modal';
import Thumbnail from './Thumbnail';
import '../styles/GifGallery.css';

class GifGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      offset: 0,
      selected: null,
      modalOpen: false,
      isLoading: false,
    }

    this.selectImage = this.selectImage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
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

  nextImage() {
    const {
      gifs,
      selected,
    } = this.state;
    const next = selected + 1 === gifs.length ? 0 : selected + 1;
    this.setState({
      selected: next,
    })
  }

  previousImage() {
    const {
      gifs,
      selected,
    } = this.state;
    const previous = selected - 1 < 0 ? gifs.length - 1 : selected - 1;
    this.setState({
      selected: previous,
    })
  }

  scrollHandler() {
    const {
      offset,
      isLoading,
    } = this.state;

    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && !isLoading) {
      this.setState({
        isLoading: true,
      })
      this.getTrending(offset);
    }
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
          isLoading: false,
        });
      })
      .catch(error => {
        console.error('error: ', error);
        this.setState({
          isLoading: false,
        })
      }) 
  }

  componentDidMount() {
    this.getTrending(this.state.offset);
    window.addEventListener('scroll', this.scrollHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler, false); 
  }

  render() {
    const {
      gifs,
      selected,
      offset,
      modalOpen,
    } = this.state

    document.body.style.overflow = modalOpen ? 'hidden' : 'visible';

    return (
      <div 
        className="gif-gallery"
      >
        <Modal
          modalOpen={modalOpen}
          selectedImage={gifs[selected]}
          toggleModal={this.toggleModal}
          nextImage={this.nextImage}
          previousImage={this.previousImage}
        />

        <div className='temp-button'>
          <button onClick={() => this.getTrending(offset)}>
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
