import { createGlobalStyle, DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  colors: {
    main: '#0079d3',
    secondary: '#dae0e6'
  },
  fonts: {
    main: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.secondary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export {
  GlobalStyle,
  theme
}
