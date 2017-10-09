import React, { Component } from 'react';
import Buttons from './Buttons';
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
        <Buttons previousImage={previousImage} nextImage={nextImage}/>
        <SelectedImage imageData={selectedImage}/>
        <InfoPanel imageData={selectedImage} />
      </div>
    )
    
    return modalOpen && selectedImage ? modal : null;
  }
}

export default Modal;
