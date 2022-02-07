import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeFilled } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { AuthContext } from '../../context/auth/AuthContext';
import { MainContainer } from '../../styles/ErrorBoundary';

const ErrorComponent = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    const handleHome = () => {
        if(isAuthenticated) {
            navigate('/dashboard/dc', {
                replace: true
            });
        } else {
            navigate('/login', {
                replace: true
            });
        }

        navigate(0);
    };

    return (
        <MainContainer className="animate__animated animate__fadeIn">
            <Result
                status="500"
                title="500"
                subTitle="Sorry, something went wrong."
                extra={
                    <Button
                        type="primary"
                        icon={<HomeFilled />}
                        onClick={handleHome}
                    >
                        Back Home
                    </Button>
                }
            />
        </MainContainer>
    );
};

export default ErrorComponent;
