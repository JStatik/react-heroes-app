import { normalize, schema } from 'normalizr';
import heroes from '../data';

const getHeroesByName = name => {
    const heroesByName = (name === '') ? [] : Object.values(heroes.entities).filter(hero =>
        hero.superhero.toLowerCase().includes(name.toLowerCase())
    );

    const hero = new schema.Entity('heroes');
    const heroListSchema = new schema.Array(hero);

    const normalizedData = normalize(heroesByName, heroListSchema);

    return {
        ids: normalizedData.result,
        entities: normalizedData.entities.heroes || {}
    };
};

export default getHeroesByName;
