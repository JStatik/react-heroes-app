import React, { useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
    const { user: { logged } } = useContext( AuthContext )

    return (
        <Router>
            <>
                <Switch>
                    <PublicRoute exact path="/login" component={ LoginScreen } isAuthenticated={ logged } />
                    <PrivateRoute path="/" component={ DashboardRoutes } isAuthenticated={ logged } />
                </Switch>
            </>
        </Router>
    )
};

export default AppRouter;
