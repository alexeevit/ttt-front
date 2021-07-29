import React from 'react';

import Cell from './Cell.js'
import './Grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  get cells() {
    return this.props.grid;
  }

  handleCellClick = (cell) => {
    const { locked, onAction } = this.props;
    if (locked) return false;

    onAction(cell);
  }

  render() {
    return (
      <div className="Grid">
        {Object.keys(this.cells).map(cell => (
          <Cell key={cell} number={cell} value={this.cells[cell]} onClick={this.handleCellClick} />
        ))}
      </div>
    );
  }
}

export default Grid;
