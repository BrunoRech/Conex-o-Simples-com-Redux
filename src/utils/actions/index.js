import { LOGIN } from './actionTypes';

export const clickLoginButton = value => ({
    type: LOGIN,
    newValue: value
});