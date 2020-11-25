import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import SearchScreen from '../../../components/search/SearchScreen';

describe( 'Pruebas sobre SearchScreen', () => {
    test( 'Debe mostrar el componente con la informacion por defecto correctamente', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/search' ] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.alert-info' ).text().trim() ).toBe( 'Search a hero' );
    } );

    test( 'Debe mostrar el componente con la informacion del heroe correctamente', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/search?q=batman' ] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.card-title' ).text().trim() ).toBe( 'Batman' );
    } );

    test( 'Debe mostrar el componente con la informacion de error', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/search?q=batman123' ] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.alert-danger' ).text().trim() ).toBe( "There aren't any hero called: batman123" );
    } );

    test( 'Debe ejecutar el metodo push() del history', () => {
        const historyMock = {
            replace: jest.fn(),
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/search' ] }>
                <Route path="/search" component={ () => <SearchScreen history={ historyMock } /> } />
            </MemoryRouter>
        );
        
        wrapper.find( 'input' ).simulate( 'change', {
            target: {
                name: 'heroe',
                value: 'batman'
            }
        } );

        wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( historyMock.push ).toHaveBeenCalledWith( '?q=batman' );
    } );
} );
