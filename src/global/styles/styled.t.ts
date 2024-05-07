/*
    Creating the types, it makes more easy to search all colors on "Theme" and make typescript 
    understand that isn't a String but a Hexcode
*/
import 'styled-components'
import theme from './theme'

declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
}
