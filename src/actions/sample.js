// Todo: Remove Sample Reducer

import * as types from './types';

function setSampleMessage(payload) {
  return { type: types.SET_SAMPLE_MESSAGE, payload: payload };
}

export function setMessage(message) {
  return dispatch => {
    dispatch(setSampleMessage({ message }));
  };
}
