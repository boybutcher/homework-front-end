import React, { Component } from 'react';
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

    const imageStyle = selectedImage ? {
      backgroundImage: `url('${selectedImage.images.original.url}')`
    } : null;

    const modal = (
      <div className='modal' onClick={() => toggleModal()}>
        <button onClick={(e) => this.preventBubble(e, previousImage)}>
          previous
        </button>
        <button onClick={(e) => this.preventBubble(e, nextImage)}>
          next
        </button>

        <span
          className='selected-image'
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
