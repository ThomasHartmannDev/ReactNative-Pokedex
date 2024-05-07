import styled, { css } from "styled-components/native";
import { TypeName } from ".";
import * as Progress from 'react-native-progress';


type TypeProps = {
    type: TypeName
}
//@ts-ignore
export const Header = styled.View<TypeProps>`${({theme, type}) =>css`
        background-color: ${theme.colors.backgroundCard[type]};
        height: 340px;
        padding: 20px;


        flex-direction: row;
        align-items: center;
        position: relative;
    `
}`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 70px;
    left: 40px;
`;
//@ts-ignore
export const ContentImage = styled.View<TypeProps>`${({theme, type}) =>css`
        position: relative;
    `
}`;

export const CircleImage = styled.Image`
    width: 125px;
    height: 125px;
    position: absolute;
`;

export const PokemonImage = styled.Image`
    width: 125px;
    height: 125px;
`;
export const Content = styled.View`
    margin-left: 30px;
`
//@ts-ignore
export const PokemonID = styled.Text`${({theme}) => css`
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    
        color: ${theme.colors.light_text};
    `}
`;
//@ts-ignore
export const PokemonName = styled.Text`${({theme}) => css`
    text-transform: capitalize;
    font-style: normal;
    font-weight: bold;
    font-size: 28px; /* Faltou ":" aqui */
    line-height: 38px;
    color: ${theme.colors.background};
    `}
`;

//@ts-ignore
export const PokemonTypeContainer = styled.View`${({theme}) =>css`
    flex-direction: row;
`}`;

//@ts-ignore
export const PokemonType = styled.View<TypeProps>`${({theme, type}) =>css`
    width: 61px;
    height: 25px;
    background: ${theme.colors.boxType[type]};
    border-radius: 3px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 10px;
`}`;

//@ts-ignore
export const PokemonTypeText = styled.Text`${({theme}) =>css`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-transform: capitalize;
    color: ${theme.colors.background};
`}`;

export const DotsImage = styled.Image`
    width: 85px;
    position: absolute;
    right: -20px;
    top: 220px;
`
//@ts-ignore
export const Container = styled.View`${({theme}) =>css`
    flex: 1;
    padding: 25px;
    background-color: ${theme.colors.background};
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    margin-top: -40px;
`}`;
//@ts-ignore
export const Title = styled.Text<TypeName>`${({theme, type}) =>css`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    color: ${theme.colors.boxType[type]}
`}`;
//@ts-ignore
export const StatusBar = styled.View`${({theme}) =>css`
    width: 100%;
    padding: 10px 20px;
    flex-direction: row;
    align-items: center;
`}`;

//@ts-ignore
export const Attributes = styled.Text`${({theme}) =>css`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    width: 110px;
    line-height: 14px;
    text-transform: capitalize;
    color: ${theme.colors.light_text}
`}`;

//@ts-ignore
export const AttributeValue = styled.Text`${({theme}) =>css`
    font-style: normal;
    font-weight: normal;
    width: 50px;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${theme.colors.detail};
    margin-left: 10px;
`}`;

//@ts-ignore
export const ContentBar = styled.View`${({theme}) =>css`
    margin-left: 20px;
`}`;

//@ts-ignore
export const ProgressBar = styled(Progress.Bar)<TypeProps>`

`;

//@ts-ignore
export const Ability = styled.Text`${({theme}) =>css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: ${theme.colors.detail};
    padding: 10px 20px;
    text-transform: capitalize;
`}`;