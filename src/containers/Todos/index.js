import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import Button from "../../utils/button";
import AddTodo from "../../components/AddTodo";
import Todo from "../../components/Todo";
import Modal from "../../components/Modal";
import { LoaderComponent } from "../../components/Loader/styles";

import TodosActions from "../../store/ducks/todos";

import { Container, Title, SubTitle } from "./styles";
import { Error, ErrorWrapper } from "../Auth/styles";

class Todos extends Component {
  static propTypes = {
    getTodosRequest: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired,
    todoMessage: PropTypes.shape({
      type: PropTypes.string,
      content: PropTypes.string
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string
      })
    ).isRequired
  };

  componentDidMount() {
    const { getTodosRequest } = this.props;

    getTodosRequest();
  }

  render() {
    const {
      todos,
      error,
      todoMessage,
      modalOpen,
      openModal,
      loading
    } = this.props;

    return (
      <Container>
        <Title>Your todos</Title>
        <SubTitle>All tou have to do for now...</SubTitle>

        <Button type="button" onClick={() => openModal()}>
          Add Todo
        </Button>

        <ErrorWrapper>{error && <Error>{error}</Error>}</ErrorWrapper>
        <ErrorWrapper>
          {todoMessage.content && (
            <Error type={todoMessage.type}>{todoMessage.content}</Error>
          )}
        </ErrorWrapper>

        {loading && (
          <Modal opacity={0.4}>
            <LoaderComponent className="lds-ring" color="white">
              <div />
              <div />
              <div />
              <div />
            </LoaderComponent>
          </Modal>
        )}

        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}

        {modalOpen && <AddTodo />}
      </Container>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  modalOpen: todos.addTodo.open,
  todos: todos.data,
  error: todos.error,
  todoMessage: todos.todoMessage,
  loading: todos.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
