import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Button from "../../utils/button";
import Todo from "../../components/Todo";

import TodosActions from "../../store/ducks/todos";

import { Container, Title, SubTitle } from "./styles";

class Todos extends Component {
  render() {
    const { modalOpen, openModal, closeModal } = this.props;

    return (
      <Container>
        <Title>Your todos</Title>
        <SubTitle>All tou have to do for now...</SubTitle>
        <Button type="button" onClick={() => openModal()}>
          Add Todo
        </Button>

        {modalOpen && <Todo close={closeModal} />}
      </Container>
    );
  }
}

const mapStateToProps = ({ todos }) => ({
  modalOpen: todos.modalOpen
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
