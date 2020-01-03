import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { firestore } from "../../services/firebase";

import AddTodo from "../../modals/AddTodo";
import Todo from "../../components/Todo";

import TodosActions from "../../store/modules/todos/reducer";

import {
  Container,
  TodosContainer,
  AddIcon,
  Button
} from "./styles";

function Todos() {
  const [modalOpen, setModalOpen] = useState(false);

  const todos = useSelector(({ todos }) =>
    [...todos.data]
      .filter(todo => !todo.done)
      .sort((a, b) => {
        const diff = new Date(b.date.seconds) - new Date(a.date.seconds);
        return diff;
      })
  );

  const done = useSelector(({ todos }) =>
    [...todos.data]
      .filter(todo => todo.done)
      .sort((a, b) => {
        const diff = new Date(b.date.seconds) - new Date(a.date.seconds);
        return diff;
      })
  );

  const userId = useSelector(({ firebase }) => firebase.auth.uid);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = firestore
      .collection("todos")
      .doc(userId)
      .onSnapshot(snapshot => {
        const todos = snapshot.data().todos;
        dispatch(TodosActions.getTodosSuccess(todos));
      });

    return () => unsubscribe();
  }, []);

  return (
    <Container>
        <Button type="button" onClick={() => setModalOpen(true)}>
          <AddIcon />
          Add Todo
        </Button>

        <TodosContainer>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </TodosContainer>
        <TodosContainer>
          {done.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </TodosContainer>

      <AddTodo visible={modalOpen} close={() => setModalOpen(false)} />
    </Container>
  );
}

export default Todos;
