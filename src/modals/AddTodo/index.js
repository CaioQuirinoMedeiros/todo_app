import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import TodosActions from "../../store/ducks/todos";

import Modal from "../../components/Modal";

import { Form, Input, Title, Button } from "../../styles/components";

const todoSchema = Yup.object().shape({
  todo: Yup.string()
    .required("The todo is required")
    .min(2, "Too short")
});

function AddTodo({ close, ...rest }) {
  const dispatch = useDispatch();

  function handleAddTodo({ todo }) {
    dispatch(TodosActions.addTodoRequest(todo));
    close();
  }

  return (
    <Modal close={close} {...rest}>
      <Formik validationSchema={todoSchema} onSubmit={handleAddTodo}>
        {({ isValid, errors }) => (
          <Form>
            <Title>Add new todo</Title>

            <Input
              type="text"
              name="todo"
              placeholder="New todo"
              error={errors.todo}
            />
            <Button disabled={!isValid} type="submit">
              Add
            </Button>
            <Button type="submit" red onClick={close}>
              Cancel
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default AddTodo;
