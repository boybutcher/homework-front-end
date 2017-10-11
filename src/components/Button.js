import React, { Component } from 'react';
import '../styles/Button.css';

class Button extends Component {
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
      direction,
    } = this.props;
    const callback = direction === 'left' ? previousImage : nextImage;

    return (
      <span
        className={direction === 'left' ? `cycle-button left` : `cycle-button right`}
        onClick={(e) => this.preventBubbling(e, callback)}
      >
        {direction === 'left' ? '◀' : '►'}
      </span>
    )
  }
}

export default Button;
