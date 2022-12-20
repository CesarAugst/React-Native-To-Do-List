import { ButtonIcon } from '@components/ButtonIcon';
import { DisplayCountTodoList } from '@components/DisplayCountTodoList';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { TodoCard } from '@components/TodoCard';
import { useState } from 'react';
import { Alert, FlatList, Text } from 'react-native';
import { Container, Content } from './styles';

export function Todolist() {

  const [todoList, setTodoList] = useState([{title: 'Limpar a casa', finished: false}, {title: 'Estudar React', finished: true}]);
  const [todoTitle, setTodoTitle] = useState('');

  function handleTodoAdd(){
    console.log(todoTitle)
    setTodoList(prevState => [...prevState, {title: todoTitle, finished: false}] )
  }
  function handleTodoRemove(title: string){
    Alert.alert('Remover', 'Remover a tarefa?', [
      {
        text: 'Sim',
        onPress: () => setTodoList(prevState => prevState.filter(todoList => todoList.title != title))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <Container>
      <Header/>
      <Content>
        <Input 
          placeholder='Adicione uma nova tarefa... '
          onChangeText={text => setTodoTitle(text)}
        />
        <ButtonIcon
          onPress={handleTodoAdd}
          icon='add-circle-outline'
        />
      </Content>
      <DisplayCountTodoList criadasCount={todoList.length.toString()} concluidasCount="0"/>
      <FlatList
        data={todoList}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <TodoCard
            title={item.title}
            finished={item.finished}
            onPressRemove={handleTodoRemove(item.title)}
          />
        )}
        ListEmptyComponent={() => (
          <Text>Vazio</Text>
        )}
      />
    </Container>
  );
}

