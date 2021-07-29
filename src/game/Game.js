import React from 'react';

import Grid from './Grid.js';
import { findGame } from '../api/game.js';
import { subscribeToGame } from '../websockets/game.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [null, null, null,
             null, null, null,
             null, null, null],
      user_id: Math.floor(Math.random() * 10000),
    };
  }

  componentDidMount() {
    const { user_id } = this.state;
    findGame(user_id).then((response) => response.json()).then((data) => {
      const actionCallbacks = subscribeToGame(data.id, user_id, {
        gameStarted: this.gameStarted,
        opponentAction: this.opponentAction,
        confirmedUserAction: this.confirmedUserAction,
      });

      this.actionCallbacks = actionCallbacks;
    });
  }

  gameStarted(turn) {
    console.log(`Game started: ${turn}`);
  }

  userAction = (cell) => {
    this.actionCallbacks.action(cell);
  }

  confirmedUserAction = (cell) => {
    const { grid } = this.state;
    grid[cell] = 0;
    this.setState({ grid });
  }

  opponentAction = (cell) => {
    const { grid } = this.state;
    grid[cell] = 1;
    this.setState({ grid });
  }

  render() {
    const { grid } = this.state;
    const locked = false;

    return (
      <div>
        <Grid grid={grid} locked={locked} onAction={this.userAction} />
      </div>
    );
  }
}

export default Game;
