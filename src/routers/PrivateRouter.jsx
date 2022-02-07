import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import useSetLastPath from '../hooks/useSetLastPath';
import { AuthContext } from '../context/auth/AuthContext';
import DashboardRoutes from './routes/DashboardRoutes';

const PrivateRouter = () => {
    useSetLastPath();
    const { isAuthenticated } = useContext(AuthContext);

    if(isAuthenticated) return <DashboardRoutes />;

    return (
        <Navigate
            replace
            to="/"
        />
    );
};

export default PrivateRouter;
