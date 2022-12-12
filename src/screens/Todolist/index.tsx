import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { StyleSheet, Text, View } from 'react-native';
import { Container } from './styles';

export function Todolist() {
  return (
    <Container>
      <Header/>
      <Input placeholder='Adicione uma nova tarefa... '/>
    </Container>
  );
}

