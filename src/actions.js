// An action is just an object

import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants.js'

// this action returns an object
export const setSearchField = (text) => ({
    type:CHANGE_SEARCH_FIELD,
    payload: text
})

//this action returns a function (thunk middleware is waiting for a function)
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type:REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch( error => dispatch({  type: REQUEST_ROBOTS_FAILED, payload: error}));
}