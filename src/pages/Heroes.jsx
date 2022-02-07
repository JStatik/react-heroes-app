import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EyeFilled } from '@ant-design/icons';
import { Card, Image, List } from 'antd';
import getHeroesByPublisher from '../selectors/getHeroesByPublisher';
import { HeroesContainer, MainContainer } from '../styles/Heroes';

const Heroes = ({ publisher }) => {
    const { ids: heroesIds, entities: heroes } = useMemo(() =>
        getHeroesByPublisher(publisher)
    , [publisher]);

    return (
        <MainContainer>
            <HeroesContainer>
                <List
                    dataSource={heroesIds}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 5,
                        xxl: 5
                    }}
                    renderItem={heroId => (
                        <List.Item key={heroId}>
                            <Card
                                hoverable
                                size="small"
                                className="animate__animated animate__fadeIn animate__faster"
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
                                        src={heroes[heroId].image}
                                    />
                                }
                            >
                                <Card.Meta
                                    title={heroes[heroId].superhero}
                                    description={heroes[heroId].alter_ego}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </HeroesContainer>
        </MainContainer>
    );
};

Heroes.propTypes = {
    publisher: PropTypes.string.isRequired
};

export default Heroes;
