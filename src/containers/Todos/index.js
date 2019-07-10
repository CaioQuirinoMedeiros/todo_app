import React, { Component } from "react";

import Button from "../../utils/button";
import Todo from "../../components/Todo";

import { Container, Title, SubTitle } from "./styles";

class Todos extends Component {
  state = {
    modalOpen: false
  };

  render() {
    const { modalOpen } = this.state;

    return (
      <Container>
        <Title>Your todos</Title>
        <SubTitle>All tou have to do for now...</SubTitle>
        <Button
          type="button"
          onClick={() => this.setState({ modalOpen: true })}
        >
          Add Todo
        </Button>

        {modalOpen && (
          <Todo close={() => this.setState({ modalOpen: false })} />
        )}
      </Container>
    );
  }
}

export default Todos;
