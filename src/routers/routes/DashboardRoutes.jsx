import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import { SpinContainer } from '../../styles';
import { ContentContainer, DashboardContainer } from '../../styles/Dashboard';

const HeroInfo      = React.lazy(() => import('../../pages/HeroInfo'));
const HeroSearch    = React.lazy(() => import('../../pages/HeroSearch'));
const Heroes        = React.lazy(() => import('../../pages/Heroes'));

const NavBar = React.lazy(() => import('../../components/Dashboard/NavBar'));

const DashboardRoutes = () => {
    return (
        <DashboardContainer>
            <NavBar />

            <ContentContainer>
                <Suspense
                    fallback={
                        <SpinContainer isDashboard>
                            <Spin size="large" />
                        </SpinContainer>
                    }
                >
                    <Routes>
                        <Route
                            exact
                            path="hero-search"
                            element={<HeroSearch />}
                        />

                        <Route
                            exact
                            path="hero-info/:heroId"
                            element={<HeroInfo />}
                        />

                        <Route
                            exact
                            path="marvel"
                            element={<Heroes publisher="Marvel Comics" />}
                        />

                        <Route
                            exact
                            path="dc"
                            element={<Heroes publisher="DC Comics" />}
                        />
                        
                        <Route
                            path="*"
                            element={<Navigate to="dc" />}
                        />
                    </Routes>
                </Suspense>
            </ContentContainer>
        </DashboardContainer>
    );
};

export default DashboardRoutes;
