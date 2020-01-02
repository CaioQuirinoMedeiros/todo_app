import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Confirmation from "../../modals/Confirmation";

import TodosActions from "../../store/modules/todos/reducer";

import { Card, CheckInput, TodoText, DeleteButton, Icon } from "./styles";

function Todo({ todo }) {
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const textRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const element = textRef.current;

    element.addEventListener("blur", editTodo);

    return () => element.removeEventListener("blur", editTodo);
  }, []);

  function editTodo(e) {
    dispatch(TodosActions.editTodoRequest({ ...todo, todo: e.target.value }));
  }

  function toggleTodoDone() {
    dispatch(TodosActions.editTodoRequest({ ...todo, done: !todo.done }));
  }

  function removeTodo() {
    dispatch(TodosActions.removeTodoRequest(todo.id));
  }

  return (
    <>
      <Card done={todo.done}>
        <CheckInput done={todo.done}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={toggleTodoDone}
          />
          <span className="checkmark" />
        </CheckInput>
        <TodoText
          disabled={todo.done}
          defaultValue={todo.todo}
          inputRef={textRef}
        />
        <DeleteButton type="button" onClick={() => setConfirmationOpen(true)}>
          <Icon />
        </DeleteButton>
      </Card>
      <Confirmation
        visible={confirmationOpen}
        confirm={removeTodo}
        close={() => setConfirmationOpen(false)}
        message="This action cannot be undone"
      />
    </>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    todo: PropTypes.string,
    id: PropTypes.string,
    done: PropTypes.bool
  }).isRequired
};

export default Todo;
