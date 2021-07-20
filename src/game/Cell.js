import React from 'react';

import './Cell.css';

class Cell extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.number);
  }

  get statusClassName() {
    let classes = ["Cell"];

    switch(this.value) {
      case 0:
        classes.push("circle");
        break;
      case 1:
        classes.push("cross");
        break;
      default:
    }

    return classes.join(" ");
  }

  get value() {
    return this.props.value;
  }

  render() {
    return (
      <div className={this.statusClassName} onClick={this.handleClick}></div>
    );
  }
}

export default Cell;
