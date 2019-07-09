import React, { Component } from "react";

import { Container } from "./styles";

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener("click", this.clickOutsideEventListener);
  }

  clickOutsideEventListener = e => {
    if (e.target.id === "outsideCategoryModal") {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    document.removeEventListener("click", this.clickOutsideEventListener);
  }
  render() {
    const { children } = this.props;
    return <Container id="outsideCategoryModal">{children}</Container>;
  }
}
