import {
    PLAYER_LIST,
    ADD_PLAYER,
    EDIT_PLAYER
  } from '../actions/types';
export default (state = {}, action) => { 
    switch (action.type) {  
      case PLAYER_LIST:
        return state;
        case ADD_PLAYER:
          return { ...state, [action.payload.id]: action.payload };
        case EDIT_PLAYER:
          return { ...state, [action.payload.id]: action.payload };
          default:
        return state;
    }
  };
  