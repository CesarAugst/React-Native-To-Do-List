import { ButtonIcon } from '@components/ButtonIcon';
import { DisplayCountTodoList } from '@components/DisplayCountTodoList';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { TodoCard } from '@components/TodoCard';
import { FlatList, Text } from 'react-native';
import { Container, Content } from './styles';

export function Todolist() {
  const todoList = ['Limpar a casa', 'Estudar React', 'Terminar dashboard']

  function handleTodoAdd(){
    console.log('clicou')
  }

  return (
    <Container>
      <Header/>
      <Content>
        <Input placeholder='Adicione uma nova tarefa... '/>
        <ButtonIcon
          onPress={handleTodoAdd}
          icon='add-circle-outline'
        />
      </Content>
      <DisplayCountTodoList criadasCount={todoList.length.toString()} concluidasCount="0"/>
      <FlatList
        data={todoList}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <TodoCard
            title={item}
          />
        )}
        ListEmptyComponent={() => (
          <Text>Vazio</Text>
        )}
      />
    </Container>
  );
}

