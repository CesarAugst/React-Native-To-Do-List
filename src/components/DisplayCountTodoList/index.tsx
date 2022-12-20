import { View } from "react-native";
import { Container, CounterDisplay, Pill, Count } from "./styles";

type Props = {
    criadasCount: String,
    concluidasCount: String
}

export function DisplayCountTodoList({ criadasCount, concluidasCount }: Props) {
    var criadasText = `Criadas ${criadasCount}`;
    var concluidasText = `Concluídas ${concluidasCount}`;
    return(
        <Container>
                <CounterDisplay>{criadasText}</CounterDisplay>
                <CounterDisplay>{concluidasText}</CounterDisplay>
        </Container>
    );
}