import { SELECT_LIBRARY } from './ActionType';

export const selectLibrary = (libraryId) => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId,
  };
}

/*
  changeText (text)
  return {
    type: 'change_text',
    payload: text,
  };
*/
