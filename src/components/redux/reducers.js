import {
    SET_STATE,
    SET_USER
} from "./actions";

function saveState(state) {
    localStorage.setItem('state', JSON.stringify({user: state.user}));
}

function dataReducer(state = {user: {}, products: []}, action) {
    let result = {};
    switch (action.type) {
        case SET_STATE:
            return {
                user: (action.state && action.state.user) ? action.state.user : (state.user ? state.user : {}),
            };
        case SET_USER:
            result = {
                ...state,
                user: action.user
            };
            saveState(result);
            return result;
        default:
            return state;
    }
}

export default dataReducer;
