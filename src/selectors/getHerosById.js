import heroes from '../data/heroes';

const getHeroesById = ( id ) => {
    return heroes.find( ( elem ) => elem.id === id );
};

export default getHeroesById;
