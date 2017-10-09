import React, { Component } from 'react';
import '../styles/SelectedImage.css'

class SelectedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  render() {
    const {
      imageData,
    } = this.props;

    const imageStyle = {
      backgroundImage: `url('${imageData.images.original.url}')`
    };

    return (
      <span
        className='selected-image'
        style={imageStyle}
        onClick={(e) => e.stopPropagation()}>
      </span>  
    )
  }
}

export default SelectedImage;