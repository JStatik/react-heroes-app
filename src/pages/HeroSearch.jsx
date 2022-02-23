import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { MainContainer } from '../styles/HeroSearch';

const SearchForm    = React.lazy(() => import('../components/HeroSearch/SearchForm'));
const SearchResult  = React.lazy(() => import('../components/HeroSearch/SearchResult'));

const HeroSearch = () => {
    const [heroesByName, setHeroesByName] = useState({
        ids: [],
        entities: {},
        loading: false
    });

    return (
        <MainContainer>
            <Row justify="center">
                <Col
                    xs={20}
                    sm={20}
                    md={9}
                    lg={9}
                    xl={9}
                    xxl={9}
                >
                    <SearchForm {...heroesByName} />
                </Col>

                <Col
                    xs={20}
                    sm={20}
                    md={11}
                    lg={11}
                    xl={11}
                    xxl={11}
                >
                    <SearchResult
                        {...heroesByName}
                        setHeroesByName={setHeroesByName}
                    />
                </Col>
            </Row>
        </MainContainer>
    );
};

export default HeroSearch;
