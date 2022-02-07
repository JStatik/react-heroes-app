import React, { useContext, useState } from 'react';
import { UnlockOutlined } from '@ant-design/icons';
import { Button, Divider } from 'antd';
import { AuthContext } from '../context/auth/AuthContext';
import { ButtonContainer, LoginContainer, MainContainer } from '../styles/Login';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const { startLogin } = useContext(AuthContext);

    const handleLogin = () => {
        setLoading(true);

        setTimeout(() => {
            startLogin(setLoading);
        }, 1000);
    };

    return (
        <MainContainer className="animate__animated animate__fadeIn">
            <LoginContainer>
                <Divider>INGRESAR</Divider>

                <ButtonContainer>
                    <Button
                        block
                        type="primary"
                        loading={loading}
                        onClick={handleLogin}
                        icon={!loading && <UnlockOutlined />}
                    >
                        Login
                    </Button>
                </ButtonContainer>
            </LoginContainer>
        </MainContainer>
    );
};

export default Login;
