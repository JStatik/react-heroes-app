import heroes from "../data/heroes";

const getHeroesByName = ( name = '' ) => {
    if( name === '' ) return [];

    name = name.toLowerCase();

    return heroes.filter( ( elem ) => elem.superhero.toLowerCase().trim().includes( name ) );
};

export default getHeroesByName;
