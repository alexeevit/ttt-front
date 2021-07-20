import React from 'react';

import Cell from './Cell.js'
import './Grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null }
    };
  }

  handleCellClick = (number) => {
    const cells = {...this.state.cells, [number]: 0};
    this.setState({ cells });
  }

  render() {
    const { cells } = {...this.state};

    return (
      <div className="Grid">
        {Object.keys(cells).map(cell => (
          <Cell key={cell} number={cell} value={cells[cell]} onClick={this.handleCellClick} />
        ))}
      </div>
    );
  }
}

export default Grid;
