import React, { Component } from 'react';
import TwitterIcon from '../assets/twitter-icon.png';
import GiphyIcon from '../assets/giphy-icon.png';
import '../styles/SelectedImageModal.css';

class SelectedImageModal extends Component {
  render() {
    const {
      modalOpen,
      imageData: {
        user: {
          twitter,
        } = {
          twitter: null,
        },
        bitly_url,
      },
    } = this.props;

    const modal = (
      <div className='selected-image-modal'>
        <div className='external-links'>
          <a href={bitly_url} target='_blank'> 
            <img className='social-media-icon' src={GiphyIcon}/>
          </a>
          <a href={`https://twitter.com/${twitter}`} target='_blank'> 
            <img className='social-media-icon' src={TwitterIcon}/>
          </a>
        </div>
      </div>
    )
    console.log('this.props: ', this.props);
    console.log('bitly_url: ', bitly_url);
    return modalOpen ? modal : null;
  }
}

export default SelectedImageModal;
