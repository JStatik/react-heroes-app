import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../routers/PrivateRoute';

describe( 'Pruebas sobre PrivateRoute', () => {
    const props = {
        location: {
            pathname: '/search',
            search: '?q=batman'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test( 'Debe mostrar el componente correctamente, si esta autenticado y ejecutar el localStorage con los argumentos esperados', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuthenticated={ true } component={ () => <h1>Componente de prueba</h1> } { ...props } />
            </MemoryRouter>
        );

        expect( wrapper.find( 'h1' ).exists() ).toBe( true );
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/search?q=batman' );
    } );

    test( 'No debe mostrar el componente, si el usuario no esta autenticado', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute isAuthenticated={ false } component={ () => <h1>Componente de prueba</h1> } { ...props } />
            </MemoryRouter>
        );

        expect( wrapper.find( 'h1' ).exists() ).toBe( false );
    } );
} );
