import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Confirmation from "../Confirmation";

import TodosActions from "../../store/ducks/todos";

import { TodoCard, CheckInput, TodoText, DeleteButton, Icon } from "./styles";

class Todo extends Component {
  state = {
    deleteConfirmation: false
  };

  componentDidMount() {
    const { todo } = this.props;

    const textInput = document.getElementById(`text-${todo.id}`);

    textInput.addEventListener("blur", this.editTodo);
  }

  componentWillUnmount() {
    const { todo } = this.props;
    const textInput = document.getElementById(`text-${todo.id}`);

    textInput.removeEventListener("blur", this.editTodo);
  }

  inputChange = e => {
    const { todoInputChange, todo } = this.props;

    todoInputChange(todo.id, e.target.textContent);
  };

  editTodo = e => {
    const { editTodoRequest, todo } = this.props;

    editTodoRequest({ ...todo, todo: e.target.textContent });
  };

  toggleTodoDone = e => {
    const { editTodoRequest, todo } = this.props;

    editTodoRequest({ ...todo, done: e.target.checked });
  };

  removeTodo = () => {
    const { removeTodoRequest, todo } = this.props;

    removeTodoRequest(todo.id);
  };

  render() {
    const { todo } = this.props;
    const { deleteConfirmation } = this.state;

    return (
      <TodoCard done={todo.done}>
        <CheckInput>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={this.toggleTodoDone}
          />
          <span className="checkmark" />
        </CheckInput>
        <TodoText contentEditable={!todo.done} id={`text-${todo.id}`}>
          {todo.todo}
        </TodoText>
        <DeleteButton
          type="button"
          onClick={() => this.setState({ deleteConfirmation: true })}
        >
          <Icon />
        </DeleteButton>

        {deleteConfirmation && (
          <Confirmation
            confirm={this.removeTodo}
            close={() => this.setState({ deleteConfirmation: false })}
            message="This action cannot be undone"
          />
        )}
      </TodoCard>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Todo);
