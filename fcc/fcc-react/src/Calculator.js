import React, { useState } from 'react';

const nums = [
  {
    value: 0,
    desc: 'zero'
  },
  {
    value: 1,
    desc: 'one'
  },
  {
    value: 2,
    desc: 'two'
  },
  {
    value: 3,
    desc: 'three'
  },
  {
    value: 4,
    desc: 'four'
  },
  {
    value: 5,
    desc: 'five'
  },
  {
    value: 6,
    desc: 'six'
  },
  {
    value: 7,
    desc: 'seven'
  },
  {
    value: 8,
    desc: 'eight'
  },
  {
    value: 9,
    desc: 'nine'
  },
  {
    value: '.',
    desc: 'decimal'
  }
];

function Calculator() {
  const [display, updateDisplay] = useState('');
  const handleAdd = buttonPressed => {
    //updateDisplay(display + buttonPressed);
  };
  const handleClear = buttonPressed => {
    updateDisplay('0');
  };
  const handleDivide = buttonPressed => {
    //updateDisplay(display + buttonPressed);
  };
  const handleEquals = buttonPressed => {
    updateDisplay(display + buttonPressed);
  };
  const handleMultiply = buttonPressed => {
    //updateDisplay(display + buttonPressed);
  };
  const handleNum = buttonPressed => {
    let tempDisplay = display;
    // If the number already has a decimal point, don't put more in
    if (buttonPressed === '.') {
      tempDisplay =
        tempDisplay.indexOf('.') >= 0
          ? tempDisplay
          : tempDisplay + buttonPressed;
    } else {
      tempDisplay = tempDisplay + buttonPressed;
    }

    // Strip out any leading zeroes.
    tempDisplay = tempDisplay.replace(/\b0+\B/, '');
    updateDisplay(tempDisplay);
  };
  const handleSubtract = buttonPressed => {
    updateDisplay(display + buttonPressed);
  };
  return (
    <div>
      <h1>Bart's Calculator</h1>
      <div className="outside-box" id="calculator">
        <div className="grid">
          {nums.map(num => (
            <button
              className="numpad"
              id={num.desc}
              onClick={() => {
                handleNum(num.value);
              }}
            >
              {num.value}
            </button>
          ))}
        </div>
        <div className="grid">
          <button
            className="controlpad"
            id="equals"
            onClick={() => {
              handleEquals();
            }}
          >
            {'='}
          </button>
          <button
            className="controlpad"
            id="add"
            onClick={() => {
              handleAdd();
            }}
          >
            {'+'}
          </button>
          <button
            className="controlpad"
            id="subtract"
            onClick={() => {
              handleSubtract();
            }}
          >
            {'-'}
          </button>
          <button
            className="controlpad"
            id="multiply"
            onClick={() => {
              handleMultiply();
            }}
          >
            {'*'}
          </button>
          <button
            className="controlpad"
            id="divide"
            onClick={() => {
              handleDivide();
            }}
          >
            {'/'}
          </button>
          <button
            className="controlpad"
            id="clear"
            onClick={() => {
              handleClear();
            }}
          >
            {'AC'}
          </button>
        </div>
        <div id="display">{display}</div>
      </div>
    </div>
  );
}

export default Calculator;
