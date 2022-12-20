import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";
import theme from "src/theme";

export const Container = styled(TouchableOpacity)`
    ${({ theme}) => css`
        background-color: ${theme.COLORS.BLUE_DARK};
    `};
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    border-radius: 5px;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
    color: theme.COLORS.WHITE, 
    size: 24
}))``;