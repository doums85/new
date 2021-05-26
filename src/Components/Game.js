import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from './ButtonIcon';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';

const Game = ({ score, myChoice, setScore }) => {
  const [house, setHouse] = useState('');
  const [playerWin, setPlayerWin] = useState('');

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    switch (myChoice + house) {
      case 'scissorspaper':
      case 'rockscissors':
      case 'paperrock':
        setPlayerWin('win');
        setScore(score + 1);
        break;

      case 'paperscissors':
      case 'scissorsrock':
      case 'rockpaper':
        setPlayerWin('lose');
        setScore(score - 1);
        break;

      case 'scissorsscissors':
      case 'rockrock':
      case 'paperpaper':
        setPlayerWin('draw');
        break;
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);
  console.log(myChoice);
  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>

        {myChoice == 'paper' && (
          <ButtonIcon
            choice={Paper}
            classIcon={`icon icon__${myChoice} ${
              playerWin == 'win' ? `icon icon__${myChoice}--winner` : 'hidden'
            }`}
          />
        )}

        {myChoice == 'scissors' && (
          <ButtonIcon
            choice={Scissors}
            classIcon={`icon icon__${myChoice} ${
              playerWin == 'win' ? `icon icon__${myChoice}--winner` : 'hidden'
            }`}
          />
        )}
        {myChoice == 'rock' && (
          <ButtonIcon
            choice={Rock}
            classIcon={`icon icon__${myChoice} ${
              playerWin == 'win' ? `icon icon__${myChoice}--winner` : 'hidden'
            }`}
          />
        )}
      </div>

      {playerWin == 'win' && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="game__again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == 'lose' && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="game__again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == 'draw' && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="game__again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter == 0 ? (
          <div
            className={`icon icon__${house} ${
              playerWin == 'lose' ? `icon icon__${house}--winner` : ''
            }`}>
            <img src={house == 'paper' && Paper} />
            <img src={house == 'scissors' && Scissors} />
            <img src={house == 'rock' && Rock} />
          </div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
