// INITIALIZES CLOCK ON SERVER
import * as types from './types';

export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)