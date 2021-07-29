import * as base from './base.js';

export const findGame = (user_id) => {
  return base.post('/games/find', { user_id: user_id });
};
