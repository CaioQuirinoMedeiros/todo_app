import React from "react";

import Modal from "../Modal";

import { Container, Message } from "./styles";
import Button from "../../utils/button";

const Confirmation = ({ close, confirm, message }) => (
  <Modal closeModal={close}>
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
      <Button type="button" onClick={() => close()}>
        Cancel
      </Button>
    </Container>
  </Modal>
);

export default Confirmation;
