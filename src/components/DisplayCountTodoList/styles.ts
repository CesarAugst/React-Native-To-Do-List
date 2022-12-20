import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 30px;
    max-height: 50px;
`;

export const CounterDisplay = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.BLUE};
        font-size: ${theme.FONT_SIZE.SM}px;
    `};
`;
