import React, { Component } from 'react';
import SelectedImageModal from './SelectedImageModal';
import '../styles/SelectedImage.css';

class SelectedImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
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
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={this.toggleModal}
        onMouseLeave={this.toggleModal}>
        <SelectedImageModal
          imageData={imageData}
          modalOpen={this.state.modalOpen} 
        />
      </span>  
    )
  }
}

export default SelectedImage;
