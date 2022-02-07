import React, { Fragment, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';
import getHeroById from '../selectors/getHeroById';
import { CardsContainer, HeroContainer, MainContainer } from '../styles/HeroInfo';

const NotFound = React.lazy(() => import('../components/HeroInfo/NotFound'));

const HeroInfo = () => {
    const { heroId } = useParams();
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    if(!hero) return <NotFound />;

    const dataCard = [
        { title: 'Alter Ego', description: hero.alter_ego },
        { title: 'Publisher', description: hero.publisher },
        { title: 'First Appearance', description: hero.first_appearance },
        { title: 'Characters', description: hero.characters }
    ];

    return (
        <MainContainer>
            <HeroContainer>
                <CardsContainer className="animate__animated animate__fadeIn animate__faster">
                    <Image
                        width="100%"
                        alt="SuperHeroe"
                        src={hero.image}
                    />

                    <Card
                        bordered={false}
                        title={
                            <Fragment>
                                <Button
                                    type="link"
                                    size="large"
                                    icon={<ArrowLeftOutlined />}
                                    onClick={handleBack}
                                />

                                {hero.superhero}
                            </Fragment>
                        }
                    >
                        {
                            dataCard.map(({ description, title }) => (
                                <Card.Meta
                                    key={title}
                                    title={title}
                                    description={description}
                                />
                            ))
                        }
                    </Card>
                </CardsContainer>
            </HeroContainer>
        </MainContainer>
    );
};

export default HeroInfo;
