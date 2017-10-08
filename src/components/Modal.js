import React, { Component } from 'react';
import InfoPanel from './InfoPanel';
import '../styles/Modal.css';

class Modal extends Component {
  render() {
    const {
      modalOpen,
      toggleModal,
      selectedImage
    } = this.props;

    const imageStyle = selectedImage ? {
      backgroundImage: `url('${selectedImage.images.original.url}')`
    } : null;

    const modal = (
      <div className='Modal' onClick={() => toggleModal()}>
        <span
          className='selectedImage'
          style={imageStyle}
          onClick={(e) => e.stopPropagation()}>
        </span>
        <InfoPanel imageData={selectedImage} />
      </div>
    )
    
    return modalOpen && selectedImage ? modal : null;
  }
}

export default Modal;
