import {SELECT_LIBRARY} from '../actions/ActionType';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_LIBRARY:
      return action.payload;
    default:
      return state;
  }
}
