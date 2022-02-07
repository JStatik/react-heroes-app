import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeFilled } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { MainNotFound, NotFoundContainer } from '../../styles/HeroInfo';

const NotFound = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/dashboard/dc', {
            replace: true
        });
    };

    return (
        <MainNotFound className="animate__animated animate__fadeIn">
            <NotFoundContainer>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
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
            </NotFoundContainer>
        </MainNotFound>
    );
};

export default NotFound;
