import React, { Component } from 'react';
import '../styles/InfoPanel.css';

class InfoPanel extends Component {
  render() {
    const {
      user: {
        avatar_url,
        display_name,
        profile_url,
        twitter,
      } = {},
      source_post_url,
      import_datetime,
      bitly_url,
    } = this.props.imageData;

    const standinAvatar = 'https://i.pinimg.com/236x/64/78/b4/6478b40ee5f7f169b6d25f914ccfcac2--silhouette-viking.jpg';

    return (
      <span className='InfoPanel'>
        <span>
          
        </span>
      </span>
    )
  }
};

export default InfoPanel;
