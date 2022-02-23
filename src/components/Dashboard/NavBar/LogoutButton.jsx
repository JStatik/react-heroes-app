import React, { useContext, useState } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { AuthContext } from '../../../context/auth/AuthContext';

const LogoutButton = React.memo(() => {
    const [loading, setLoading] = useState(false);
    const { startLogout } = useContext(AuthContext);

    const handleLogout = () => {
        setLoading(true);

        setTimeout(() => {
            startLogout(setLoading);
        }, 1000);
    };

    return (
        <Button
            danger
            loading={loading}
            onClick={handleLogout}
            icon={!loading && <LogoutOutlined />}
        >
            Logout
        </Button>
    );
});

LogoutButton.displayName = 'LogoutButton';

export default LogoutButton;
