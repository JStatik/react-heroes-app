import types from '../types';

const authReducer = (state, action) => {
    switch(action.type) {
        case types.AUTH_LOGIN:
            return {
                ...state,
                isAuthenticated: true
            };

        case types.AUTH_LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };

        default:
            return state;
    }
};

export default authReducer;
