import React, { Component } from 'react';
import '../styles/Button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.preventBubbling = this.preventBubbling.bind(this);
  }

  //prevents click actions that would effect childs parent and runs neccesary function
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
    //conditional call of image cycling functions
    const callback = direction === 'left' ? previousImage : nextImage;

    //conditional rendering for type of button
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
