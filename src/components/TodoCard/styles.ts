import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    finished: boolean
}

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_500};
    `};
    margin: 5px 24px;
    border-radius: 5px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 20px;
`;

export const Title = styled.Text <Props>`
    ${({ theme, finished }) => css`
        color: ${theme.COLORS.WHITE};      
        text-decoration: ${finished ? 'line-through' : 'none'};
    `};
`;

export const DeleteTodo = styled(TouchableOpacity)`
    ${({ theme}) => css`
        color: ${theme.COLORS.WHITE};
    `};
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_300, 
    size: 24
}))``;

export const ConfirmTodo = styled(TouchableOpacity)<Props>`
    ${({ theme, finished }) => css`
        background-color: ${finished ? theme.COLORS.BLUE : theme.COLORS.GRAY_500};
        border: ${theme.COLORS.BLUE};
    `};
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    border-radius: 20px
`;
export const VerifiedIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE, 
    size: 16
}))<Props>`
    ${({ theme, finished}) => css`
        color: ${finished ? theme.COLORS.WHITE : theme.COLORS.GRAY_500};
    `};
`;