import { createGlobalStyle } from 'styled-components';

export const primaryColor = '#5D6D7E';

const GlobalStyles = createGlobalStyle`
    body {
        background: #fafafa;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: scroll;
        scrollbar-width: none;
    }
    
    body::-webkit-scrollbar { display: none; }
`; GlobalStyles.displayName = 'GlobalStyles';

export default GlobalStyles;
