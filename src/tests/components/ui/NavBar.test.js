import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import AuthContext from '../../../auth/AuthContext';
import { Router } from 'react-router-dom';
import NavBar from '../../../components/ui/NavBar';
import types from '../../../types/types';

describe( 'Pruebas sobre NavBar', () => {
    const contextValue = {
        user: {
            name: 'Javier',
            logged: true
        },
        dispatch: jest.fn()
    };

    const historyMock = {
        listen: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn(),
        location: {}
    };

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <Router history={ historyMock }>
                <NavBar />
            </Router>
        </AuthContext.Provider>
    );

    afterEach( () => {
        jest.clearAllMocks();
    } );

    test( 'Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe( 'Javier' );
    } );

    test( 'Debe llamar el handleLogout, ejecutar el dispatch y usar el useHistory', () => {
        wrapper.find( 'button' ).simulate( 'click' );

        expect( contextValue.dispatch ).toHaveBeenCalledTimes( 1 );
        expect( contextValue.dispatch ).toHaveBeenCalledWith( { type: types.logout } );

        expect( historyMock.replace ).toHaveBeenCalledTimes( 1 );
        expect( historyMock.replace ).toHaveBeenCalledWith( '/login' );
    } );
} );
