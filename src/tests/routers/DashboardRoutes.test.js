import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import AuthContext from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import DashboardRoutes from '../../routers/DashboardRoutes';

describe( 'Pruebas sobre DashboardRoutes', () => {
    const contextValue = {
        user: {
            name: 'Javier',
            logged: true
        },
        dispatch: jest.fn()
    }

    test( 'Debe mostrar el componente correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe( 'Javier' )
    } );
} );
