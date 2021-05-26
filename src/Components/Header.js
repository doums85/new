import React from 'react';

function Header({ score }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title">
          <span>rock</span>
          <span>paper</span>
          <span>scissors</span>
        </div>

        <div className="score-box">
          <p className="score-box__text">score</p>
          <p
            className={
              score < 0
                ? 'losing score-box__score'
                : 'score-box__score' && score > 0
                ? 'winning score-box__score'
                : 'score-box__score'
            }>
            {score}{' '}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
