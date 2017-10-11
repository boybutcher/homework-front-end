import React, { Component } from 'react';
import SelectedImage from './SelectedImage';
import InfoPanel from './InfoPanel';
import '../styles/Modal.css';

class Modal extends Component {
  render() {
    const {
      modalOpen,
      toggleModal,
      selectedImage,
      nextImage,
      previousImage,
    } = this.props;

    const modal = (
      <div className='modal' onClick={() => toggleModal()}>
        <SelectedImage
          imageData={selectedImage} 
          previousImage={previousImage} 
          nextImage={nextImage}
        />
        <InfoPanel imageData={selectedImage} />
      </div>
    )
    
    return modalOpen && selectedImage ? modal : null;
  }
}

export default Modal;
