import styled from 'styled-components';

export const MainContainer = styled.div`
    background-attachment: fixed;
    background-image: url('/heroes.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    height: 100vh;
    justify-content: center;
    padding-top: 200px;
    width: 100vw;
`; MainContainer.displayName = 'MainContainer';


export const LoginContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    height: 150px;
    max-width: 95%;
    width: 400px;

    .ant-divider {
        border-top-color: rgba(0, 0, 0, 0.2);
        font-weight: bold;
    }
`; LoginContainer.displayName = 'LoginContainer';


export const ButtonContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 95%;
    width: 300px;
`; ButtonContainer.displayName = 'ButtonContainer';
