import React, { useState, useEffect } from 'react';

const defaultSession = 15; //1500
const defaultBreak = 300;

function convertToMins(origSecs) {
  let mins = Math.floor(origSecs / 60);
  let secs = origSecs - mins * 60;
  return mins + ':' + secs;
}
function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(defaultSession);
  const [runningState, setRunningState] = useState('stop');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const handleRunningState = () => {
    if (runningState === 'run') {
      setRunningState('stop');
    } else {
      setRunningState('run');
    }
  };

  return (
    <div>
      <div className='outside-box' id='calculator'>
        <h1>Bart's Pomodoro</h1>
        <div className='grid'>
          <div id='break'>
            <h2 id='break-label'>Break Length</h2>
          </div>
          <div id='session'>
            <h2 id='session-label'>Session Length</h2>
          </div>
          <button
            className='controlpad'
            id='start_stop'
            onClick={() => {
              handleRunningState();
            }}
          >
            {'Start/Stop'}
          </button>
        </div>
        <div id='time-left'>{convertToMins(timeLeft)}</div>
      </div>
    </div>
  );
}

export default Pomodoro;

// https://medium.com/@kristin_baumann/react-countdown-6455838b6faf
