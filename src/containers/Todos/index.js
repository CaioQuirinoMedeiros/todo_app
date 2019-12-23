import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../utils/button";
import AddTodo from "../../modals/AddTodo";
import Todo from "../../components/Todo";

import TodosActions from "../../store/modules/todos/reducer";

import { Container, Title, SubTitle } from "./styles";

function Todos() {
  const [modalOpen, setModalOpen] = useState(false);

  const todos = useSelector(({ todos }) => todos.data);

  const dispatch = useDispatch();

  useEffect(() => {
    loadTodos();
  }, []);

  function loadTodos() {
    dispatch(TodosActions.getTodosRequest());
  }

  return (
    <Container>
      <Title>Your todos</Title>
      <SubTitle>All tou have to do for now...</SubTitle>

      <Button type="button" onClick={() => setModalOpen(true)}>
        Add Todo
      </Button>

      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}

      <AddTodo visible={modalOpen} close={() => setModalOpen(false)} />
    </Container>
  );
}

export default Todos;
