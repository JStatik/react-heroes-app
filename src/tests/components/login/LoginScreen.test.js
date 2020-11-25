import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import AuthContext from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import types from '../../../types/types';

describe( 'Pruebas sobre LoginScreen', () => {
    const historyMock = {
        replace: jest.fn()
    };

    const contextValue = {
        user: {
            logged: false
        },
        dispatch: jest.fn()
    };

    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ historyMock } />
        </AuthContext.Provider>
    );

    test( 'Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Al llamarse la funcion handleLogin, debe ejecutarse el dispatch y el replace', () => {
        wrapper.find( 'button' ).simulate( 'click' );

        expect( historyMock.replace ).toHaveBeenCalledWith( '/' );
        expect( contextValue.dispatch ).toHaveBeenCalledWith( {
            type: types.login,
            payload: {
                name: 'Javier'
            }
        } );      
    } );
} );
