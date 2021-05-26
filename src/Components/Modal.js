import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import rules from "../images/image-rules.svg";

const Modals = ({ setOpen, open, onOpenModal }) => {
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
      <h1>Rules</h1>
      <img src={rules} alt="Rules" srcset="" />
      </Modal>
    </div>
  );
};


export default Modals;
