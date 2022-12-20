import { Container, DeleteTodo, Icon, Title, ConfirmTodo, VerifiedIcon } from "./styles";

type Props = {
    title: String,
}

export function TodoCard({ title }: Props){
    return(
        <Container>
            <ConfirmTodo>
                <VerifiedIcon name="done" />
            </ConfirmTodo>
            <Title>{title}</Title>
            <DeleteTodo>
                <Icon name="delete" />
            </DeleteTodo>
        </Container>
    )
}