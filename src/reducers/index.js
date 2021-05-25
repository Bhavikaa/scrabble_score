import {combineReducers} from 'redux';
import { reducer as formReducer} from 'redux-form';
import wordReducer from './wordReducer';
import playerReducer from './playerReducer';

export default combineReducers(
    {
        form:formReducer,
        words:wordReducer,
        playerList:playerReducer
    }
)

