import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';

const Navigation = React.memo(() => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const handleNavigation = path => navigate(path);

    return (
        <Tabs
            size="small"
            activeKey={pathname}
            defaultActiveKey={pathname}
            onChange={handleNavigation}
        >
            <Tabs.TabPane
                key="/dashboard/dc"
                tab="DC Heroes"
            />

            <Tabs.TabPane
                key="/dashboard/marvel"
                tab="Marvel Heroes"
            />

            <Tabs.TabPane
                key="/dashboard/hero-search"
                tab="Hero Search"
            />
        </Tabs>
    );
});

Navigation.displayName = 'Navigation';

export default Navigation;
