import React, { createContext, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import types from '../types';
import authReducer from './authReducer';
import errorNotification from '../../helpers/errorNotification';

const init = () => {
    try {
        return {
            isAuthenticated: JSON.parse(localStorage.getItem('uha')) || false
        };
    } catch(err) {
        // console.log(err);

        return {
            isAuthenticated: false
        };
    }
};

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {}, init);
    const { isAuthenticated } = state;

    const startLogin = useCallback(setLoading => {
        try {
            localStorage.setItem('uha', true);
            dispatch({ type: types.AUTH_LOGIN });
        } catch(err) {
            // console.log(err);

            errorNotification('Por favor, hable con el administrador.');
            setLoading(false);
        }
    }, []);

    const startLogout = useCallback(setLoading => {
        try {
            toast.dismiss();
            localStorage.removeItem('uha');

            dispatch({ type: types.AUTH_LOGOUT });
        } catch(err) {
            // console.log(err);

            errorNotification('Por favor, hable con el administrador.');
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                startLogin,
                startLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.array.isRequired
};

export default AuthProvider;
