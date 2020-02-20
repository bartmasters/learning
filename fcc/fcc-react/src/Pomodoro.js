import React, { useState, useEffect } from 'react';

const defaultSession = 15; //1500
const defaultBreak = 300;

function convertToMins(origSecs) {
  let mins = Math.floor(origSecs / 60);
  let secs = origSecs - mins * 60;
  return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
}
function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(defaultSession);
  const [runningState, setRunningState] = useState('stop');

  useEffect(() => {
    if (runningState === 'run') {
      const interval = setInterval(() => {
        if (timeLeft >= 1) {
          setTimeLeft(timeLeft - 1);
        } else {
          console.log('Times up');
          setRunningState('stop');
          clearInterval(interval);
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
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
      <div className="outside-box" id="calculator">
        <h1>Bart's Pomodoro</h1>
        <div className="grid">
          <div id="break">
            <h2 id="break-label">Break Length</h2>
          </div>
          <div id="session">
            <h2 id="session-label">Session Length</h2>
          </div>
          <input
            type="image"
            src="play-pause-svgrepo-com.svg"
            alt="Play/pause"
            id="start_stop"
            width="48"
            height="48"
            onClick={() => {
              handleRunningState();
            }}
          />
        </div>
        <div id="time-left">{convertToMins(timeLeft)}</div>
      </div>
    </div>
  );
}

export default Pomodoro;
