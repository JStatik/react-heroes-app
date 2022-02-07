import styled, { css } from 'styled-components';

const DynamicSpinContainer = css`
    ${ ({ isDashboard }) => {
        return `
            height: ${ isDashboard ? '100%' : '100vh' };
        `;
    } }
`;


export const SpinContainer = styled.div`
    ${ DynamicSpinContainer }

    align-items: center;
    background: #fafafa;
    display: flex;
    justify-content: center;
`; SpinContainer.displayName = 'SpinContainer';
