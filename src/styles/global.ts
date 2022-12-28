import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${(props) => props.theme['neutral-900']};
        color: ${(props) => props.theme['neutral-100']};
    }

    body, input, textarea,button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
`
