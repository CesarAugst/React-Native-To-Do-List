import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    padding: 24px;
    margin-top: -50px;
    max-height: 100px;
`;