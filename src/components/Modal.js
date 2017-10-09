import React, { Component } from 'react';
import SelectedImage from './SelectedImage';
import InfoPanel from './InfoPanel';
import '../styles/Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.preventBubble = this.preventBubble.bind(this);
  }

  preventBubble(e, func) {
    e.stopPropagation();
    func();
  }

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
        <button onClick={(e) => this.preventBubble(e, previousImage)}>
          previous
        </button>
        <button onClick={(e) => this.preventBubble(e, nextImage)}>
          next
        </button>

        <SelectedImage imageData={selectedImage}/>
        <InfoPanel imageData={selectedImage} />
      </div>
    )
    
    return modalOpen && selectedImage ? modal : null;
  }
}

export default Modal;
