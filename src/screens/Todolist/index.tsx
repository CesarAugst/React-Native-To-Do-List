import { ButtonIcon } from '@components/ButtonIcon';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from './styles';

export function Todolist() {
  return (
    <Container>
      <Header/>
      <Content>
        <Input placeholder='Adicione uma nova tarefa... '/>
        <ButtonIcon
          icon='add-circle-outline'
        />
      </Content>
    </Container>
  );
}

