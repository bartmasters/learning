import React, { useState } from 'react';

function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState('60');
  const [startStop, setStartStop] = useState('stop');

  const handleStartStop = () => {
    if (startStop === 'start') {
      setStartStop('stop');
    } else {
      setStartStop('start');
    }
    //setisplay('0');
  };

  return (
    <div>
      <h1>Bart's Pomodoro</h1>
      <div className="outside-box" id="calculator">
        <div className="grid">
          <button
            className="controlpad"
            id="start_stop"
            onClick={() => {
              handleStartStop();
            }}
          >
            {'Start/Stop'}
          </button>
        </div>
        <div id="time-left">{timeLeft}</div>
      </div>
    </div>
  );
}

export default Pomodoro;

// https://medium.com/@kristin_baumann/react-countdown-6455838b6faf
