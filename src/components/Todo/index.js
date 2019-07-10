import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
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

class Todo extends Component {
  // componentDidMount() {
  //   const { cleanUp } = this.props;
  //   cleanUp();
  // }

  render() {
    // const { signInRequest, loading, error } = this.props;

    return (
      <Modal closeModal={this.props.close}>
        <Formik
          initialValues={{ todo: "" }}
          validationSchema={todoSchema}
          onSubmit={({ todo }, { setSubmitting }) => {
            console.log(todo);
            this.props.addTodoRequest(todo);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form>
              <Title>Add new todo</Title>
              <SubTitle>Type your todo and press add</SubTitle>

              <Input type="text" name="todo" placeholder="New todo" />
              <ErrorWrapper>
                <ErrorMessage name="todo" component={Error} />
              </ErrorWrapper>

              <Button disabled={!isValid} type="submit">
                {isSubmitting ? "Adding todo..." : "Add"}
              </Button>
              <Button type="submit" red onClick={() => this.props.close()}>
                Cancel
              </Button>

              <ErrorWrapper>
                {/* {error && <Error center>{error}</Error>} */}
              </ErrorWrapper>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  loading: todos.loading,
  error: todos.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
