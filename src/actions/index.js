import { SELECT_LIBRARY } from './ActionType';

export const selectLibrary = (libraryId) => {
  return {
    type: SELECT_LIBRARY,
    payload: libraryId,
  };
}
