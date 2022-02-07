import styled from 'styled-components';
import { primaryColor } from '../GlobalStyles';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    .ant-page-header {
        background: ${ primaryColor };
        padding-top: 5px;
    }

    .ant-page-header-heading { align-items: center; }
    .ant-page-header-heading-left { margin: 0; }
    .ant-page-header-heading-extra { margin: 0; }

    .ant-page-header-heading-title {
        margin-right: 5px;
        max-height: 40px;
    }

    .ant-page-header-heading-sub-title {
        color: #222;
        font-size: 25px;
        font-weight: bold;
    }

    .ant-page-header-footer { margin-top: 0; }
    .ant-tabs .ant-tabs-tab { padding-top: 3px; }
    .ant-tabs-ink-bar { background: #f2f2f2; }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn { color: #f2f2f2; }
    .ant-tabs-tab-btn:active, .ant-tabs-tab:hover, .ant-tabs-tab-btn:focus { color: #f2f2f2; }
`; DashboardContainer.displayName = 'DashboardContainer';


export const ContentContainer = styled.main`
    flex-grow: 1;
`; ContentContainer.displayName = 'ContentContainer';
