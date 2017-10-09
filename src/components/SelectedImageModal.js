import React, { Component } from 'react';
import TwitterIcon from '../assets/twitter-icon.png';
import GiphyIcon from '../assets/giphy-icon.png';
import SourceIcon from '../assets/source-icon.png';
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
        source_post_url,
      },
    } = this.props;

    const giphyLink = bitly_url ? (
      <a href={bitly_url} target='_blank'> 
        <img
          className='social-media-icon'
          src={GiphyIcon}
          alt='giphy icon'
        />
      </a>
    ) : null;

    const twitterLink = twitter ? (
      <a href={`https://twitter.com/${twitter}`} target='_blank'> 
        <img
          className='social-media-icon'
          src={TwitterIcon}
          alt='twitter icon'
        />
      </a>
    ) : null;

    const sourceLink = source_post_url ? (
      <a href={source_post_url} target='_blank'> 
        <img
          className='social-media-icon'
          src={SourceIcon}
          alt='source icon'
        />
      </a>  
    ) : null;

    const modal = (
      <div className='selected-image-modal'>
        <div className='external-links'>
          {[
            giphyLink,
            twitterLink,
            sourceLink
          ]}
        </div>
      </div>
    )

    return modalOpen ? modal : null;
  }
}

export default SelectedImageModal;
