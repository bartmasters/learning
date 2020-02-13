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
  const [display, setDisplay] = useState('');
  //const [operands, setOperands] = useState(['']);

  const handleAdd = buttonPressed => {
    //setOperands(operands => [...operands, display]);
    setDisplay(display + buttonPressed);
    //setOperands(operands => [...operands, '+']);
  };
  const handleClear = buttonPressed => {
    setDisplay('0');
    //setOperands(['']);
  };
  const handleDivide = buttonPressed => {
    //updateDisplay(display + buttonPressed);
  };
  const handleEquals = buttonPressed => {
    //setDisplay(display + buttonPressed);
    let operands = display.split(/(\+|-)/g);
    console.log(operands);
  };
  const handleMultiply = buttonPressed => {
    //updateDisplay(display + buttonPressed);
  };
  const handleNum = buttonPressed => {
    // Get the most recent operand in the array
    // If its a number, append the input to it
    // If its an operator, put the number in a new array entry.

    //let tempDisplay = operands[operands.length - 1];
    let tempDisplay = display;
    // if (isNaN(tempDisplay)) {
    //   setOperands(operands => [...operands, buttonPressed]);
    // } else {
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
    setDisplay(tempDisplay);
    //setOperands([tempDisplay]);
    // }
  };
  const handleSubtract = buttonPressed => {
    //setDisplay(display + buttonPressed);
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
              handleAdd('+');
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
