import React from "react";
import PropTypes from "prop-types";

import Modal from "../../components/Modal";

import { Container, Message } from "./styles";
import Button from "../../utils/button";

function Confirmation({ close, confirm, message, ...rest }) {
  return (
    <Modal close={close} {...rest}>
      <Container>
        <Message>{message}</Message>
        <Button
          type="button"
          red
          onClick={() => {
            confirm();
            close();
          }}
        >
          Confirm
        </Button>
        <Button type="button" onClick={close}>
          Cancel
        </Button>
      </Container>
    </Modal>
  );
}

Confirmation.propTypes = {
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  message: PropTypes.string
};

Confirmation.defaultProps = {
  message: "Confirm operation"
};

export default Confirmation;
