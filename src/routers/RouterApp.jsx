import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import ErrorBoundary from '../pages/ErrorBoundary';

const RouterApp = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Routes>
                    <Route
                        path="/*"
                        element={<PublicRouter />}
                    />

                    <Route
                        path="/dashboard/*"
                        element={<PrivateRouter />}
                    />
                </Routes>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default RouterApp;
