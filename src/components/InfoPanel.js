import React, { Component } from 'react';
import '../styles/InfoPanel.css';

class InfoPanel extends Component {
  render() {
    const {
      user: {
        avatar_url,
        display_name,
        profile_url,
      } = {
        avatar_url: 'https://i.pinimg.com/236x/64/78/b4/6478b40ee5f7f169b6d25f914ccfcac2--silhouette-viking.jpg',
        display_name: 'Anonymous User',
        profile_url: null,
      },
      source_post_url,
      import_datetime,
    } = this.props.imageData;

    const avatarStyle = {
      backgroundImage: `url('${avatar_url}')`,
    }

    return (
      <div className='info-panel' onClick={(e) => e.stopPropagation()}>
        <span
          className='avatar'
          style={avatarStyle}
        >
        </span>
        <span className='post-data'>
          <a
            className='poster-name'
            href={profile_url}
            target='_blank'
          > 
            {display_name} 
          </a>
          <sub className='post-date'>
            posted on {new Date(import_datetime).toString().split(' ').slice(0, 5).join(' ')}
          </sub>
        </span>
      </div>
    )
  }
};

export default InfoPanel;
