import React, { Component } from 'react';
import SelectedImageModal from './SelectedImageModal';
import '../styles/SelectedImage.css';

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

    return (
      <div
        className='selected-image'
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={this.toggleModal}
        onMouseLeave={this.toggleModal}
      >
        <SelectedImageModal
          imageData={imageData}
          modalOpen={this.state.modalOpen} 
        />
        <img className='displayed' src={imageData.images.original.url} />
      </div>
    )
  }
}

export default SelectedImage;
