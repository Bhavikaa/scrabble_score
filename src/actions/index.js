import {
  CREATE_WORD,
  PLAYER_LIST,
  EDIT_PLAYER,
  ADD_PLAYER,
  SCORE_WORD,
  CLEAR_WORD
} from './types';
export const createWord = (wordObj) => {
  return {
    type: CREATE_WORD,
    payload: wordObj
  };
};
export const clearWord = () => {
  return {
    type: CLEAR_WORD,
  };
}
export const scoreWord = (wordObj) => {
  return {
    type: SCORE_WORD,
    payload: wordObj
  };
}
export const playerList = () => {
  return {
    type: PLAYER_LIST,
  };
}
export const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    payload: player
  };
}
export const editPlayer = player => {
  return {
    type: EDIT_PLAYER,
    payload: player
  }
}