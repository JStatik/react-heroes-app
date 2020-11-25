import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';

const LoginScreen = ( { history } ) => {
    const { dispatch } = useContext( AuthContext );

    const path = localStorage.getItem( 'lastPath' ) || '/';

    const handleLogin = () => {
        dispatch( {
            type: types.login,
            payload: {
                name: 'Javier'
            }
        } );

        history.replace( path );
    };

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>

            <button className="btn btn-primary" onClick={ handleLogin }>Login</button>
        </div>
    )
};

LoginScreen.propTypes = {
    history: PropTypes.object.isRequired
};

export default LoginScreen;
