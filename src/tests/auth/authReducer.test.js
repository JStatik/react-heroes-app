import '@testing-library/jest-dom';
import authReducer from '../../auth/authReducer';
import types from '../../types/types';

describe( 'Pruebas sobre authReducer', () => {
    test( 'Debe retornar el estado por defecto', () => {
        const state = authReducer( {}, {} )

        expect( {} ).toEqual( state );
    } );

    test( 'Debe autenticar y colocar el nombre del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Javier'
            }
        };

        const state = authReducer( {}, action );

        expect( { name: 'Javier', logged: true } ).toEqual( state );
    } );

    test( 'Debe borrar el nombre del usuario y la propiedad logged debe ser false', () => {
        const action = {
            type: types.logout
        };

        const state = authReducer( { name: 'Javier', logged: true }, action );

        expect( { logged: false } ).toEqual( state );
    } );
} );
