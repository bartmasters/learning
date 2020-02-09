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
const funcs = [
  {
    value: '=',
    desc: 'equals'
  },
  {
    value: '+',
    desc: 'add'
  },
  {
    value: '-',
    desc: 'subtract'
  },
  {
    value: '*',
    desc: 'multiply'
  },
  {
    value: '/',
    desc: 'divide'
  },
  {
    value: 'Clear',
    desc: 'clear'
  }
];

function Calculator() {
  const [display, updateDisplay] = useState('');
  const handleNum = buttonPressed => {
    updateDisplay(display + buttonPressed);
  };
  const handleFunc = buttonPressed => {
    //updateDisplay(display + buttonPressed);
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
          {funcs.map(f => (
            <button
              className="controlpad"
              id={f.desc}
              onClick={() => {
                handleFunc(f.value);
              }}
            >
              {f.value}
            </button>
          ))}
        </div>
        <div id="display">{display}</div>
      </div>
    </div>
  );
}

export default Calculator;
