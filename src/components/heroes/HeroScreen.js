import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Redirect, useParams } from 'react-router-dom';
import getHeroesById from '../../selectors/getHerosById';

const HeroScreen = ( { history } ) => {
    const { heroeId } = useParams();
    const heroe = useMemo( () => getHeroesById( heroeId ), [ heroeId ] );

    if( !heroe ) return <Redirect to="/" />;

    const { superhero, publisher, alter_ego, first_appearance, characters } = heroe;

    const handleReturn = () => {
        if( history.length <= 2 ) {
            publisher === 'Marvel Comics' && history.push( '/' );
            publisher === 'DC Comics' && history.push( '/dc' );
        } else {
            history.goBack();
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ `../assets/heroes/${ heroeId }.jpg` } alt={ superhero } className="img-thumbnail animate__animated animate__zoomIn"/>
            </div>

            <div className="col-8 animate__animated animate__slideInRight">
                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{ alter_ego }</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    { alter_ego !== characters && <li className="list-group-item"><b>Characters: </b>{ characters }</li> }
                    <li className="list-group-item"><b>First Appearance: </b>{ first_appearance }</li>
                </ul>

                <button className="btn btn-outline-info" onClick={ handleReturn }>Return</button>
            </div>
        </div>
    )
};

HeroScreen.propTypes = {
    history: PropTypes.object.isRequired
};

export default HeroScreen;
