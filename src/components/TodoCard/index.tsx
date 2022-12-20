import { TouchableOpacityProps } from "react-native";
import { Container, DeleteTodo, Icon, Title, ConfirmTodo, VerifiedIcon } from "./styles";

type Props = {
    title: String,
    finished: boolean,
    onPressRemove: () => void,
}

export function TodoCard({ title, finished, onPressRemove }: Props){
    return(
        <Container>
            <ConfirmTodo finished={finished}>
                <VerifiedIcon name="done" />
            </ConfirmTodo>
            <Title finished={finished}>{title}</Title>
            <DeleteTodo onPress={onPressRemove}>
                <Icon name="delete" />
            </DeleteTodo>
        </Container>
    )
}