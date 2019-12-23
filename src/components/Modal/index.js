import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Modal({ visible, close, children }) {
  function handleClickOutside(e) {
    if (e.target.id === "modal") {
      close();
    }
  }

  return visible ? (
    <Container onClick={handleClickOutside} id="modal">
      {children}
    </Container>
  ) : null;
}

Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.element.isRequired,
  close: PropTypes.func
};

Modal.defaultProps = {
  visible: true,
  close: () => {}
};

export default Modal;
