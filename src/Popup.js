import React from 'react';
import './Popup.css';

function Popup({ message, onRestart }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{message}</h2>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;