import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modals from './Modal';
const Footer = ({ setScore }) => {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);



  const resetScore = () => {
    setTimeout(() => {
      setScore(0);
    }, 500);
  };
  return (
    <>
      <footer className="footer">
        <div class="attribution">
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a target="_blank" href="https://github.com/doums85/react-rock-scissors-paper-game">Seck Mamadou Faye</a>.
        </div>
        <div className="btn_group">
          <Link to="/">
          <i onClick={resetScore} className="fas fa-redo restart"></i>
          </Link>
          <button className="rules" onClick={onOpenModal}>
            Rules
          </button>
        </div>
      </footer>
      {open ? <Modals setOpen={setOpen} open={open}  onOpenModal={onOpenModal} /> : null}
    </>
  );
};

export default Footer;
