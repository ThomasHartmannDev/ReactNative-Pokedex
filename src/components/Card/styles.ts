import styled, {css} from 'styled-components/native';

type PokemonType = {
    type: string;
}

//Dinamically taking the right color using the Type
//@ts-ignore
export const PokemonCard = styled.TouchableOpacity<PokemonType>`${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row;
        padding: 20px;
    `}
`

//@ts-ignore
export const LeftSide = styled.View`${({ theme }) => css`
        width: 50%;
        position: relative;

        `}`

export const ImageCardDetailLeftSide = styled.Image`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
`   

//@ts-ignore
export const PokemonId = styled.Text`${({ theme }) => css`
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        color: ${theme.colors.light_text};
`}`

//@ts-ignore
export const PokemonName = styled.Text`${({ theme }) => css`
        font-weight: bold;
        font-size: 25px;
        line-height: 31px;
        margin-top: 5px;
        text-transform: capitalize;
        color: ${theme.colors.background};
`}`

export const PokemonContentType = styled.View`
    flex-direction: row;
`
//@ts-ignore
export const PokemonType = styled.View<PokemonType>`${({ theme, type }) => css`
        background: ${theme.colors.boxType[type]};
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 3px;
        margin-left: 5px;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
    `}
`

//@ts-ignore
export const PokemonTypeText = styled.Text`${({ theme }) => css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
        color: ${theme.colors.background};
`}`

export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    position: relative;
`

export const PokemonImage = styled.Image`
    margin-top: -40px;
    width: 130px;
    height: 130px;
    right: -40px;
`
export const PokeballDetail = styled.Image`
    position: absolute;
    right: -40px;
`