import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import AuthContext from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe( 'Pruebas sobre AppRouter', () => {
    const contextValue = {
        user: { 
            logged: false 
        },
        dispath: jest.fn()
    };

    test( 'Debe mostrar el componente LoginScreen, si no esta autenticado el usuario', () => {
        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'Debe mostrar el componente MarvelScreen, si esta autenticado el usuario', () => {
        const contextValue = {
            user: { 
                name: 'Javier',
                logged: true 
            },
            dispath: jest.fn()
        };

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.navbar' ).exists() ).toBe( true );
    } );
} );
