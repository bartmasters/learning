import React, { useState, useEffect } from 'react';

const defaultSession = 1500; //1500
const defaultBreak = 300;

function convertToMins(origSecs) {
  let mins = Math.floor(origSecs / 60);
  let secs = origSecs - mins * 60;
  return (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
}
function displayMins(origSecs) {
  let mins = Math.floor(origSecs / 60);
  return mins;
}
function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(defaultSession);
  const [runningState, setRunningState] = useState('stop');
  const [breakLength, setBreakLength] = useState(defaultBreak);
  const [sessionLength, setSessionLength] = useState(defaultSession);
  const [sessionMode, setSessionMode] = useState('Session');
  const playAudio = React.useRef();

  useEffect(() => {
    if (runningState === 'run') {
      const interval = setInterval(() => {
        console.log(timeLeft);
        if (timeLeft >= 1) {
          setTimeLeft(timeLeft - 1);
        } else {
          if (sessionMode === 'Session') {
            setTimeLeft(breakLength);
            setSessionMode('Break');
          } else {
            setTimeLeft(sessionLength);
            setSessionMode('Session');
          }
        }
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  });
  useEffect(() => {
    if (timeLeft === 0) {
      console.log('derp');
      playAudio.current.play();
    }
  });

  const decrementBreak = () => {
    if (breakLength >= 120) {
      setBreakLength(breakLength - 60);
    }
  };
  const incrementBreak = () => {
    if (breakLength <= 3540) {
      setBreakLength(breakLength + 60);
    }
  };
  const decrementSession = () => {
    if (sessionLength >= 120) {
      setSessionLength(sessionLength - 60);
      setTimeLeft(sessionLength - 60);
    }
  };
  const incrementSession = () => {
    if (sessionLength <= 3540) {
      setSessionLength(sessionLength + 60);
      setTimeLeft(sessionLength + 60);
    }
  };
  const handleReset = () => {
    setRunningState('stop');
    setBreakLength(defaultBreak);
    setSessionLength(defaultSession);
    setTimeLeft(defaultSession);
    setSessionMode('Session');
    playAudio.current.pause();
    playAudio.current.currentTime = 0;
  };
  const handleRunningState = () => {
    if (runningState === 'run') {
      setRunningState('stop');
    } else {
      setRunningState('run');
    }
  };

  return (
    <div>
      <h1>Bart's Pomodoro</h1>
      <div className="outside-box" id="pomodoro">
        <div id="topRow" className="grid">
          <div id="break">
            <h2 id="break-label">Break Length</h2>
            <div className="details">
              <div>
                <input
                  type="image"
                  src="down-arrow-svgrepo-com.svg"
                  alt="Break Decrement"
                  id="break-decrement"
                  width="24"
                  height="24"
                  onClick={() => {
                    decrementBreak();
                  }}
                />
              </div>
              <div>
                <h3 id="break-length">{displayMins(breakLength)}</h3>
              </div>
              <div>
                <input
                  type="image"
                  src="up-arrow-svgrepo-com.svg"
                  alt="Break Increment"
                  id="break-increment"
                  width="24"
                  height="24"
                  onClick={() => {
                    incrementBreak();
                  }}
                />
              </div>
            </div>
          </div>
          <div id="session">
            <h2 id="session-label">Session Length</h2>
            <div className="details">
              <div>
                <input
                  type="image"
                  src="down-arrow-svgrepo-com.svg"
                  alt="Session Decrement"
                  id="session-decrement"
                  width="24"
                  height="24"
                  onClick={() => {
                    decrementSession();
                  }}
                />
              </div>
              <div>
                <h3 id="session-length">{displayMins(sessionLength)}</h3>
              </div>
              <div>
                <input
                  type="image"
                  src="up-arrow-svgrepo-com.svg"
                  alt="Session Increment"
                  id="session-increment"
                  width="24"
                  height="24"
                  onClick={() => {
                    incrementSession();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="SecondRow">
          <h2 id="timer-label">{sessionMode}</h2>
          <h2 id="time-left">{convertToMins(timeLeft)}</h2>
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
          <input
            type="image"
            src="turn-on-reset-svgrepo-com.svg"
            alt="Reset"
            id="reset"
            width="24"
            height="24"
            onClick={() => {
              handleReset();
            }}
          />
          <audio
            id="beep"
            ref={playAudio}
            preload="auto"
            src="http://animal.memozee.com/animal/SOUND/JurassicPark-Tyrannosaurus_rex-Roaring.wav"
          />
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
