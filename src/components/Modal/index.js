import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

function Modal({ visible, close, children, ...rest }) {
  function handleClickOutside(e) {
    if (e.target.id === "modal") {
      close();
    }
  }

  React.useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return visible ? (
    <Container id="modal" {...rest}>
      {children}
    </Container>
  ) : null;
}

Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  close: PropTypes.func
};

Modal.defaultProps = {
  close: () => {}
};

export default Modal;
