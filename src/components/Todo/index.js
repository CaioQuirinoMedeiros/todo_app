import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Confirmation from "../../modals/Confirmation";

import TodosActions from "../../store/ducks/todos";

import { Card, CheckInput, TodoText, DeleteButton, Icon } from "./styles";

function Todo({ todo }) {
  const [confirmationOpen, setConfirmationOpen] = useState(false);

  const textRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    const element = textRef.current

    element.addEventListener("blur", editTodo);

    return () => element.removeEventListener("blur", editTodo);
  }, []);

  function editTodo(e) {
    const value = e.target.textContent;
    dispatch(TodosActions.editTodoRequest({ ...todo, todo: value }));
  }

  function toggleTodoDone() {
    dispatch(TodosActions.editTodoRequest({ ...todo, done: !todo.done }));
  }

  function removeTodo() {
    dispatch(TodosActions.removeTodoRequest(todo.id));
  }

  return (
    <Card done={todo.done}>
      <CheckInput>
        <input type="checkbox" checked={todo.done} onChange={toggleTodoDone} />
        <span className="checkmark" />
      </CheckInput>
      <TodoText
        suppressContentEditableWarning
        contentEditable={!todo.done}
        ref={textRef}
      >
        {todo.todo}
      </TodoText>
      <DeleteButton type="button" onClick={() => setConfirmationOpen(true)}>
        <Icon />
      </DeleteButton>

      {confirmationOpen && (
        <Confirmation
          confirm={removeTodo}
          close={() => setConfirmationOpen(false)}
          message="This action cannot be undone"
        />
      )}
    </Card>
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
