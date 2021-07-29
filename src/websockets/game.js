import { createConsumer } from '@rails/actioncable';

const action_cable_url = process.env.REACT_APP_ACTION_CABLE_URL;

const consumer = createConsumer(action_cable_url);
export const subscribeToGame = (game_id, user_id, callbacks) => {
  const handleEvent = (event) => {
    if (event.name === 'game:started') {
      callbacks.gameStarted(event.turn === '1');
    }
  }

  const handleAction = (data) => {
    callbacks.opponentAction(data.cell);
  }

  const handleActionConfirmed = (data) => {
    callbacks.confirmedUserAction(data.cell);
  }

  const subscription = consumer.subscriptions.create({ channel: 'GameChannel', id: game_id, user_id: user_id }, {
    connected() {
    },

    received(data) {
      console.log('data', data);

      if (data.type === 'event') {
        handleEvent(data);
      }

      if (data.type === 'action') {
        handleAction(data);
      }

      if (data.type === 'action_confirmed') {
        handleActionConfirmed(data);
      }
    },

    action(cell) {
      this.perform("action", { cell: cell })
    }
  });

  return { action: subscription.action.bind(subscription) };
};
