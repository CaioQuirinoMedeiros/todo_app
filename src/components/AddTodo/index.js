import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TodosActions from "../../store/ducks/todos";

import Button from "../../utils/button";
import Modal from "../Modal";

import {
  Form,
  Input,
  ErrorWrapper,
  Error,
  Title,
  SubTitle
} from "../../containers/Auth/styles";

const todoSchema = Yup.object().shape({
  todo: Yup.string()
    .required("The todo is required")
    .min(3, "Too short")
});

class AddTodo extends Component {
  static propTypes = {
    cleanUp: PropTypes.func.isRequired,
    addTodoRequest: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

  componentWillUnmount() {
    const { cleanUp } = this.props;
    cleanUp();
  }

  render() {
    const { addTodoRequest, loading, error, closeModal } = this.props;

    return (
      <Modal closeModal={closeModal}>
        <Formik
          initialValues={{ todo: "" }}
          validationSchema={todoSchema}
          onSubmit={({ todo }) => {
            addTodoRequest(todo);
          }}
        >
          {({ isValid }) => (
            <Form>
              <Title>Add new todo</Title>
              <SubTitle>Type your todo and press add</SubTitle>

              <Input type="text" name="todo" placeholder="New todo" />
              <ErrorWrapper>
                <ErrorMessage name="todo" component={Error} />
              </ErrorWrapper>

              <Button disabled={!isValid || loading} type="submit">
                {loading ? "Adding todo..." : "Add"}
              </Button>
              <Button type="submit" red onClick={() => closeModal()}>
                Cancel
              </Button>

              <ErrorWrapper>
                {error && <Error center>{error}</Error>}
              </ErrorWrapper>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  loading: todos.addTodo.loading,
  error: todos.addTodo.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
