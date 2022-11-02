import { combineReducers } from 'redux'
import { registerReducer, photoReducer } from './authentication'
import { globalReducer } from './global'
import { homeReducer } from './home';

const reducer = combineReducers({registerReducer, globalReducer, photoReducer, homeReducer});

export default reducer;
