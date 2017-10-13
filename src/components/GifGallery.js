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
    this.fetchCheck = this.fetchCheck.bind(this);
    this.getTrending = this.getTrending.bind(this);
  }

  //selects image & opens modal
  selectImage(index) {
    this.setState({
      selected: index,
      modalOpen: true,
    })
  }

  //allows switching modal open/close
  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  //when modal is open, lets you cycle through array of gifs within state, when reaches end, goes back to first index
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

  //works the same as nextImage
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

  //when using a scroll action, will check to see if the bottom part of the body is within the viewport and grab more items if it is
  scrollHandler() {
    const {
      offset,
    } = this.state;

    if (this.fetchCheck()) {
      this.setState({
        isLoading: true,
      })
      this.getTrending(offset);
    }
  }

  //returns a boolean value to see if enough of the bottom of the body is within the viewport
  fetchCheck() {
    return (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50) && !this.state.isLoading;
  }

  //grabs 25 gifs at a time from the Giphy API
  getTrending(offset = 0) {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=ErgAmxc7tbRDVkRNPuvIuLoNd3mJWW3B&limit=25&offset=${offset}`)
      .then(response => (
        response.json()
      ))
      .then(json => {
        const {
          gifs,
          offset,
        } = this.state;

        // add gifs to state, increase the offset by 25 to know where to pick up from on next request
        const updatedGifs = [...gifs].concat(json.data);
        const nextOffset = offset + 25;

        //after setting state, if the body doesnt take up the viewport, keep grabbing trending
        this.setState({
          gifs: updatedGifs,
          offset: nextOffset,
          isLoading: false,
        }, () => {
          if (this.fetchCheck()) {
            this.getTrending(this.state.offset);
          }
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
      modalOpen,
    } = this.state

    // disable scrolling if modal is open
    document.body.style.overflow = modalOpen ? 'hidden' : 'visible';

    return (
      <div className="gif-gallery">
        <Modal
          modalOpen={modalOpen}
          selectedImage={gifs[selected]}
          toggleModal={this.toggleModal}
          nextImage={this.nextImage}
          previousImage={this.previousImage}
        />
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
