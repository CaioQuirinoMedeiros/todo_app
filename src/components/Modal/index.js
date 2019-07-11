import React, { Component } from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

export default class Modal extends Component {
  static propTypes = {
    opacity: PropTypes.number,
    children: PropTypes.element.isRequired,
    closeModal: PropTypes.func
  };

  static defaultProps = {
    opacity: 0.9,
    closeModal: () => {}
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.clickOutsideEventListener);
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
    const { children, opacity } = this.props;
    return (
      <Container opacity={opacity} id="outsideCategoryModal">
        {children}
      </Container>
    );
  }
}
