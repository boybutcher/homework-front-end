import React, { Component } from 'react';
import Button from './Button';
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
        <Button previousImage={previousImage} direction={'left'}/>
        <SelectedImage imageData={selectedImage}/>
        <Button nextImage={nextImage} direction={'right'}/>
        <InfoPanel imageData={selectedImage} />
      </div>
    )
    
    return modalOpen && selectedImage ? modal : null;
  }
}

export default Modal;
