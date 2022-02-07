import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: 90%;
    padding: 10px 0;
`; MainContainer.displayName = 'MainContainer';


export const HeroesContainer = styled.div`
    flex-grow: 1;
    height: 0;
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar { display: none; }

    .ant-card-bordered { border: solid 1px rgba(0, 0, 0, 0.2); }
`; HeroesContainer.displayName = 'HeroesContainer';
