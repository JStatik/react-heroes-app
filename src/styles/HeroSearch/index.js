import styled, { css } from 'styled-components';
import device from '../mediaQueries';

const DynamicMainContainer = css`
    ${ device.xlargeMin(`
        margin: 0 auto;
        max-width: 95%;
        width: 1250px;
    `) }

    ${ device.smallMax(`
        .ant-col:last-child {
            height: 100%;
            max-height: calc(100vh - 190px) !important;
        }
    `) }
`;

const DynamicChildrenCol = css`
    ${ device.smallMax('padding: 5px 0;') }
`;


export const MainContainer = styled.div`
    ${ DynamicMainContainer }

    height: 100%;

    .ant-row {
        height: 100%;
        width: 100%;
    }

    .ant-col:first-child { height: fit-content; }
    .ant-col:last-child { max-height: calc(100vh - 81.14px); }
`; MainContainer.displayName = 'MainContainer';


export const ChildrenCol = styled.div`
    ${ DynamicChildrenCol }

    height: 100%;
    padding: 10px;

    .ant-form-item { margin-bottom: 8px; }
    .ant-form-item:last-child { margin-bottom: 0; }

    .ant-form-item-label { padding-bottom: 3px; }
`; ChildrenCol.displayName = 'ChildrenCol';


export const SpinContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
`; SpinContainer.displayName = 'SpinContainer';


export const ResultsContainer = styled.div`
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar { display: none; }

    .ant-list-empty-text {  padding: 0; }

    .ant-list-item { padding: 16px 0; }
    .ant-list-item:first-child { padding-top: 1px; }
    .ant-list-item:last-child { padding-bottom: 1px; }

    .ant-card-bordered { border: solid 1px rgba(0, 0, 0, 0.2); }
`; ResultsContainer.displayName = 'ResultsContainer';
