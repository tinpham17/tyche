import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
    }
    fonts: {
      main: string
    }
    fontSizes: {
      small: string
      medium: string
      large: string
    }
  }
}
