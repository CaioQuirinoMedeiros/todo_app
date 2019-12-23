import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import TodosActions from "../../store/ducks/todos";

import Button from "../../utils/button";
import Modal from "../../components/Modal";

import { Form, Input, Title } from "../../containers/Auth/styles";

const todoSchema = Yup.object().shape({
  todo: Yup.string()
    .required("The todo is required")
    .min(2, "Too short")
});

function AddTodo({ visible, close, ...rest }) {
  const dispatch = useDispatch();

  function handleAddTodo(data) {
    dispatch(TodosActions.addTodoRequest(data));
  }

  return (
    <Modal close={close} visible={visible}>
      <Formik
        initialValues={{ todo: "" }}
        validationSchema={todoSchema}
        onSubmit={handleAddTodo}
      >
        {({ isValid, errors, ...rest }) => {
          console.log(rest);
          return (
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
          );
        }}
      </Formik>
    </Modal>
  );
}

export default AddTodo;
