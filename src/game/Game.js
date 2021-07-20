import React from 'react';

import Grid from './Grid.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid />
      </div>
    );
  }
}

export default Game;
