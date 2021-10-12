import {GET_DATA} from '../actions/ActionType';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state, data: action.payload};

    default:
      return state;
  }
};
