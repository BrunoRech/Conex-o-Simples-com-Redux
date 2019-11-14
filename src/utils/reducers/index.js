import { combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { OtherReducer } from './OtherReducer';

export const Reducers = combineReducers({
    loginState: LoginReducer,
    otherState: OtherReducer
});