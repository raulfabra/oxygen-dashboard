import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'poppinsmedium--offline';
        src: url('/src/styles/fonts/poppins-medium-webfont.woff2') format('woff2'),
            url('/src/styles/fonts/poppins-medium-webfont.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
`
