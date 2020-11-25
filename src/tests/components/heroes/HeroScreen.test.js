import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import HeroScreen from '../../../components/heroes/HeroScreen';

describe( 'Pruebas sobre HeroScreen', () => {
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };

    beforeEach( () => {
        jest.clearAllMocks();
    } );

    test( 'Debe mostrar el componente Redirect, si no hay argumentos en el URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/heroe' ] }>
                <HeroScreen history={ historyMock } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'Redirect' ).exists() ).toBe( true );
    } );

    test( 'Debe mostrar el componente, si el parametro existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/heroe/dc-batman' ] }>
                <Route path="/heroe/:heroeId" component={ HeroScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find( '.row' ).exists() ).toBe( true );
    } );

    test( 'Debe retornar al componente anterior, con push()', () => {
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/heroe/dc-batman' ] }>
                <Route path="/heroe/:heroeId" component={ () => <HeroScreen history={ historyMock } /> } />
            </MemoryRouter>
        );

        wrapper.find( 'button' ).simulate( 'click' );

        expect( historyMock.push ).toHaveBeenCalledTimes( 1 );
        expect( historyMock.push ).toHaveBeenCalledWith( '/dc' );
        expect( historyMock.goBack ).not.toHaveBeenCalled();
    } );

    test( 'Debe retornar al componente anterior, con goBack()', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ [ '/heroe/dc-batman' ] }>
                <Route path="/heroe/:heroeId" component={ () => <HeroScreen history={ historyMock } /> } />
            </MemoryRouter>
        );

        wrapper.find( 'button' ).simulate( 'click' );

        expect( historyMock.goBack ).toHaveBeenCalledTimes( 1 );
        expect( historyMock.push ).not.toHaveBeenCalled();
    } );
} );
