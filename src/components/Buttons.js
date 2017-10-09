import React, { Component } from 'react';
import '../styles/Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.preventBubbling = this.preventBubbling.bind(this);
  }

  preventBubbling(e, func) {
    e.stopPropagation();
    func();
  }

  render() {
    const {
      previousImage,
      nextImage,
    } = this.props;

    return (
      <span>
        <span 
          className='cycle-button'
          onClick={(e) => this.preventBubbling(e, previousImage)}
        >
          ◀
        </span>
        <span
          className='cycle-button'
          onClick={(e) => this.preventBubbling(e, nextImage)}
        >
          ►
        </span>
      </span>
    )
  }
}

export default Buttons;
