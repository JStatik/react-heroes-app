import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinContainer } from './styles';
import GlobalStyles from './styles/GlobalStyles';

const AuthProvider  = React.lazy(() => import('./context/auth/AuthContext'));
const RouterApp     = React.lazy(() => import('./routers/RouterApp'));

const App = () => {
    return (
        <Suspense
            fallback={
                <SpinContainer>
                    <Spin size="large" />
                </SpinContainer>
            }
        >
            <GlobalStyles />
            
            <AuthProvider>
                <ToastContainer />
                
                <RouterApp />
            </AuthProvider>
        </Suspense>
    );
};

export default App;
