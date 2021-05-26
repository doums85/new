import React from 'react';

const ButtonIcon = ({ data, setChoice, classIcon, choice }) => {
  return (
    <div>
      <div
        data-id={data && data}
        onClick={setChoice && setChoice}
        className={classIcon}>
        <img
          src={choice}
          data-id={data && data}
          onClick={setChoice && setChoice}
        />
      </div>
    </div>
  );
};

export default ButtonIcon;
