import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_700};
    `};
    width: 100%;
    height: 173px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 110.34px;
    height: 32px;
`;