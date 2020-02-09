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
  }
];

function Calculator() {
  const [display, updateDisplay] = useState('');
  const handleClick = buttonPressed => {
    updateDisplay(buttonPressed);
  };

  return (
    <div className="outside-box" id="calculator">
      <h1>Bart's Calculator</h1>
      <div className="grid">
        {nums.map(num => (
          <button
            className="numpad"
            id={num.desc}
            onClick={() => {
              handleClick(num.value);
            }}
          >
            {num.value}
          </button>
        ))}
      </div>
      <div id="display">{display}</div>
    </div>
  );
}

export default Calculator;
