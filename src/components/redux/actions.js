export const SET_STATE = 'SET_STATE'; // action types
export const SET_USER = 'SET_USER'; // action types

export function setState(state) {
    return({
        type: SET_STATE,
            state     // action payload
    })
}

export function setUser(user) {
    return({
        type: SET_USER,
            user     // action payload
    })
}
