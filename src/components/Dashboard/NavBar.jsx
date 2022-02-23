import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'antd';
import HeroesIcon from './NavBar/HeroesIcon';
import LogoutButton from './NavBar/LogoutButton';
import Navigation from './NavBar/Navigation';

const NavBar = React.memo(() => {
    return (
        <PageHeader
            subTitle="Heroes"
            extra={<LogoutButton />}
            footer={<Navigation />}
            className="animate__animated animate__slideInDown"
            title={
                <Link to="/dashboard/dc">
                    <HeroesIcon />
                </Link>
            }
        />
    );
});

NavBar.displayName = 'NavBar';

export default NavBar;
