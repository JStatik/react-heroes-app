import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('../../pages/Login'));

const CommonRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path="login"
                element={<Login />}
            />

            <Route
                path="*"
                element={<Navigate to="login" />}
            />
        </Routes>
    );
};

export default CommonRoutes;
