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

  const handleOperands = buttonPressed => {
    setDisplay(display + buttonPressed);
  };
  const handleClear = buttonPressed => {
    setDisplay('0');
  };
  const handleEquals = buttonPressed => {
    let operands = display.split(/(\+|-|\/|\*)/g);
    let accum = 0;
    let operator = 'a';
    let operator2 = '';

    operands.forEach(num => {
      if (num === '') {
        operator2 = 'negative';
        return;
      }
      if (isNaN(num)) {
        if (operator2 === 'negative' && num === '-') {
          return;
        } else {
          operator = num;
          operator2 = '';
        }
      } else {
        let num2 = num;
        if (operator2 === 'negative') {
          num2 *= -1;
        }
        switch (operator) {
          case '+':
            accum += parseFloat(num2);
            operator = '';
            break;
          case '-':
            accum -= num2;
            operator = '';
            break;
          case '*':
            accum *= parseFloat(num2);
            operator = '';
            break;
          case '/':
            accum /= num2;
            operator = '';
            break;
          default:
            accum = parseFloat(num2);
        }
      }
    });
    setDisplay(accum);
  };
  const handleNum = buttonPressed => {
    let tempDisplay = display;
    // If the number already has a decimal point, don't put more in
    if (buttonPressed === '.') {
      let splitNum = tempDisplay.split(/(\+|-|\/|\*)/g);
      tempDisplay =
        splitNum[splitNum.length - 1].indexOf('.') >= 0
          ? tempDisplay
          : tempDisplay + buttonPressed;
    } else {
      tempDisplay = tempDisplay + buttonPressed;
    }

    // Strip out any leading zeroes.
    tempDisplay = tempDisplay.toString().replace(/\b0+\B/, '');
    setDisplay(tempDisplay);
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
              handleOperands('+');
            }}
          >
            {'+'}
          </button>
          <button
            className="controlpad"
            id="subtract"
            onClick={() => {
              handleOperands('-');
            }}
          >
            {'-'}
          </button>
          <button
            className="controlpad"
            id="multiply"
            onClick={() => {
              handleOperands('*');
            }}
          >
            {'*'}
          </button>
          <button
            className="controlpad"
            id="divide"
            onClick={() => {
              handleOperands('/');
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
