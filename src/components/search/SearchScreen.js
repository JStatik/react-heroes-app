import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import getHeroesByName from '../../selectors/getHeroesByName';

const SearchScreen = ( { history } ) => {
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ { heroe }, handleInputChange, reset ] = useForm( { heroe: '' } );
    const heroesFiltered = useMemo( () => getHeroesByName( q ), [ q ] );

    const handleSearch = ( event ) => {
        event.preventDefault();

        ( heroe === '' ) ? history.replace( '/search' ) : history.push( `?q=${ heroe }` );

        reset();
    };

    return (
        <>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row animate__animated animate__fadeIn">
                <div className="col-5">
                    <h4>Search Form</h4>

                    <form onSubmit={ handleSearch }>
                        <input type="text" name="heroe" placeholder="Find your hero..." autoComplete="off" className="form-control" value={ heroe } onChange={ handleInputChange }/>
                        
                        <button type="submit" className="btn btn-block btn-primary mt-2">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>

                    {
                        ( q === '' ) && <div className="alert alert-info text-center animate__animated animate__zoomIn">Search a hero</div>
                    }

                    {
                        ( q !== '' && heroesFiltered.length === 0 ) && <div className="alert alert-danger text-center animate__animated animate__zoomIn">{ `There aren't any hero called: ${ q }` }</div>
                    }
               
                    {
                        heroesFiltered.map( ( elem ) => (
                            <div key={ elem.id } className="animate__animated animate__zoomIn">
                                <HeroCard { ...elem } />
                            </div>
                        ) )
                    }               
                </div>
            </div>
        </>
    )
};

SearchScreen.propTypes = {
    history: PropTypes.object.isRequired
};

export default SearchScreen;
