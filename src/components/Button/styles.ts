import styled, {css} from 'styled-components/native';

//@ts-ignore
export const Container = styled.TouchableOpacity`${({ theme }) => css`
    width: 100%;
    height: 50px;
    background-color: ${theme.colors.boxType.water};
    justify-content:center;
    align-items: center;
    border-radius: 45px;
`}`;
//@ts-ignore
export const Title = styled.Text`${({ theme }) => css`
    font-size: 14px;
    font-weight: bold;
    color: ${theme.colors.background};
`}`;