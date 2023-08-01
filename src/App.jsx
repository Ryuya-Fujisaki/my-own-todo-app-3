import Reace, { useState } from 'react';
import './styles.css';
import { InputArea } from './components/InputArea';
import { IncompleteArea } from './components/IncompleteArea';
import { CompleteArea } from './components/CompleteArea';

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState('');


  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
 
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputArea 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
        disabled={incompleteTodos.length >= 10}
      />
      {incompleteTodos.length >= 10 && (
      <p style={{color: 'red', paddingLeft: '16px'}} >
        追加できる未完了TODOは10個までです。<br/>
        新規追加するにはTODOを完了してください。
      </p>
      )}
      <IncompleteArea todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
      <CompleteArea todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}

