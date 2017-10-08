import React, { Component } from 'react';
import InfoPanel from './InfoPanel';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.preventClose = this.preventClose.bind(this);
  }

  preventClose(e) {
    e.stopPropagation();
  }

  render() {
    const {
      modalOpen,
      toggleModal,
      selectedImage
    } = this.props;

    const displayed = selectedImage ? {
      backgroundImage: `url('${selectedImage.images.original.url}')`
    } : null;

    const modal = (
      <div className='Modal' onClick={() => toggleModal()}>
        <span className='selectedImage' style={displayed} onClick={this.preventClose}></span>
        <InfoPanel />
      </div>
    )
    
    return modalOpen && selectedImage ? modal : null;
  }
}

export default Modal;
