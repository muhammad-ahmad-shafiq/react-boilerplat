// Todo: Remove Sample Reducer
import { SET_SAMPLE_MESSAGE } from '../actions/types';

const initialState = {
  message: 'Initial Message'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SAMPLE_MESSAGE:
      let sample = {...state};

      sample.message = action.payload.message;

      return sample

    default:
      return state;
  }
}
