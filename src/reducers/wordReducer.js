import {
  CREATE_WORD,
  SCORE_WORD,
  CLEAR_WORD
} from '../actions/types';
const INIT_STATE = { currentWord: { text: '',letters:[] }, score: "",multiplier:1 };
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_WORD:
      return { ...state, currentWord:action.payload};
    case SCORE_WORD:
      return { ...state, currentWord:action.payload }
    case CLEAR_WORD:
      return INIT_STATE;
    default:
      return state;
  }
};
