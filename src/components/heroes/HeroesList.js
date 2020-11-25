import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ( { publisher } ) => {
    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            { heroes.map( ( elem ) => {
                return <HeroCard key={ elem.id } { ...elem } />
            } ) }
        </div>
    )
};

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired
};

export default HeroesList;
