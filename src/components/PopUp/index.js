/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { Wrapper, Message, Icon } from "./styles";

function PopUp({ onClick, children, ...rest }) {
  const [open, setOpen] = useState(false);

  const closeListener = () => {
    console.log("EXECUTNADO CLOSE LISTENER, Open: ", open);
    setOpen(false);
    window.removeEventListener("click", closeListener);
  };

  useEffect(() => {
    console.log("Effect do Open: ", open);
    if (open) {
      window.addEventListener("click", closeListener);
    }
  }, [open]);

  function handleClick() {
    console.log("HANDLING CLICK, Open: ", open);
    if (open) {
      onClick();
    } else {
      setOpen(true);
    }
  }

  return <Icon onClick={handleClick} open={open} />;
}

export default PopUp;
