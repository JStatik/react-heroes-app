import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';
import { EyeFilled } from '@ant-design/icons';
import { Card, Image, List, Spin } from 'antd';
import getHeroesByName from '../../selectors/getHeroesByName';
import { ChildrenCol, ResultsContainer, SpinContainer } from '../../styles/HeroSearch';

const SearchResult = React.memo(({ entities, ids, loading, setHeroesByName }) => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const hero = searchParams.get('hero') || '';

        if(hero) {
            setHeroesByName(heroesByName => ({
                ...heroesByName,
                loading: true
            }));

            setTimeout(() => {
                const heroes = getHeroesByName(hero);

                setHeroesByName({
                    ...heroes,
                    loading: false
                });
            }, 2000);
        }
    }, [searchParams, setHeroesByName]);

    return (
        <ChildrenCol>
            {
                (loading)
                    ?
                <SpinContainer>
                    <Spin size="large" />
                </SpinContainer>
                    :
                <ResultsContainer>
                    <List
                        size="large"
                        dataSource={ids}
                        itemLayout="vertical"
                        className="animate__animated animate__fadeIn animate__faster"
                        renderItem={heroId => (
                            <List.Item key={heroId}>
                                <Card
                                    size="small"
                                    actions={[
                                        <Link
                                            key="eye"
                                            to={`/dashboard/hero-info/${ heroId }`}
                                        >
                                            <EyeFilled />
                                        </Link>
                                    ]}
                                    cover={
                                        <Image
                                            width="100%"
                                            preview={false}
                                            alt="SuperHeroe"
                                            src={entities[heroId].image}
                                        />
                                    }
                                >
                                    <Card.Meta
                                        title={entities[heroId].superhero}
                                        description={entities[heroId].alter_ego}
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </ResultsContainer>
            }
        </ChildrenCol>
    );
});

SearchResult.displayName = 'SearchResult';

SearchResult.propTypes = {
    entities: PropTypes.object.isRequired,
    ids: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    setHeroesByName: PropTypes.func.isRequired
};

export default SearchResult;
