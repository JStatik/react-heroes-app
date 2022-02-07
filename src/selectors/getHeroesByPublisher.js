import { normalize, schema } from 'normalizr';
import heroes from '../data';

const getHeroesByPublisher = publisher => {
    const heroesByPublisher = Object.values(heroes.entities).filter(hero => hero.publisher === publisher);

    if(heroesByPublisher.length === 0)
        throw new Error(`El publisher: "${ publisher }" no es válido.`);

    const hero = new schema.Entity('heroes');
    const heroListSchema = new schema.Array(hero);

    const normalizedData = normalize(heroesByPublisher, heroListSchema);

    return {
        ids: normalizedData.result,
        entities: normalizedData.entities.heroes
    };
};

export default getHeroesByPublisher;
