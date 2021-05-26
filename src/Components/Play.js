import React from 'react';
import { Link } from 'react-router-dom';
import Triangle from '../images/bg-triangle.svg';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';
import ButtonIcon from './ButtonIcon';

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <ButtonIcon
            data="paper"
            setChoice={setChoice}
            classIcon="icon icon__paper"
            choice={Paper}
          />
        </Link>

        <Link to="/game">
          <ButtonIcon
            data="scissors"
            setChoice={setChoice}
            classIcon="icon icon__scissors"
            choice={Scissors}
          />
        </Link>

        <Link to="/game">
          <ButtonIcon
            data="rock"
            setChoice={setChoice}
            classIcon="icon icon__rock"
            choice={Rock}
          />
        </Link>
      </div>
    </div>
  );
};

export default Play;
