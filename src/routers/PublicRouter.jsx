import React, { useContext, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import getLastPath from '../selectors/getLastPath';
import { AuthContext } from '../context/auth/AuthContext';
import CommonRoutes from './routes/CommonRoutes';

const PublicRouter = () => {
    const lastPath = useMemo(() => getLastPath(), []);
    const { isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated) return <CommonRoutes />;

    return (
        <Navigate
            replace
            to={lastPath}
        />
    );
};

export default PublicRouter;
