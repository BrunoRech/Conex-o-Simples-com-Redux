import { LOGIN } from '../actions/actionTypes';

const initialState = {
    loggedUser: {user: '', password: ''}
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedUser: action.newValue
            };
        default:
            return state;
    }
}