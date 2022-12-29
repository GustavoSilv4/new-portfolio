import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }

    html {
    --scroll-behavior: smooth!important;
    scroll-behavior: smooth!important;
    }

    body{
        background-color: ${(props) => props.theme.colors['neutral-900']};
        color: ${(props) => props.theme.colors['neutral-100']};

        ::-webkit-scrollbar {
        width: 5px;
        }
        ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors['neutral-900']};
        }
        ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors['red-600']};
        border-radius: 20px;
        }
    }

    body, input, textarea,button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
    }
`
