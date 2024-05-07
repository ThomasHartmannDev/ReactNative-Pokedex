
import styled, { css } from 'styled-components/native'

//@ts-ignore
export const Container = styled.View`${({ theme }) => css`
        flex: 1;
        background-color: ${theme.colors.backgroundCard.water};

    `}
`;
export const Content = styled.View`
        align-items: center;
        justify-content: center;
        height: 70%;
`;

//@ts-ignore
export const Footer = styled.View`${({ theme }) => css`
        align-items: center;
        justify-content: center;

        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.background};

        padding:20px;
    `}
`;
//@ts-ignore
export const Title = styled.Text`${({ theme }) => css`
        font-size: 40px;
        margin-top: 20px;
        color: ${theme.colors.background};
`}`;

//@ts-ignore
export const SubTitle = styled.Text`${({ theme }) => css`
        font-size: 16px;
        margin-top: 20px;
        color: ${theme.colors.background};
`}`;

//@ts-ignore
export const WrapperAnimator = styled.View`${({ theme }) => css`
        width: 200px;
        height: 300px;
        background-color: ${theme.colors.boxType.water};
        border-radius: 100px;

        justify-content: center;
        align-items: center;
        transform: rotate(30deg);

`}`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg)
`