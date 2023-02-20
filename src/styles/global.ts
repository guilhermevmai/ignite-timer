import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px;
        color: ${({ theme }) => `${theme['gray-500']}`};
    }

    body {
        background: ${({ theme }) => `${theme['gray-900']}`};
        color: ${({ theme }) => `${theme.white}`};
        -webkit-font-smoothing: antialiased;
    }

    body, input ,textarea, button {
        font-family: 'Robot', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
