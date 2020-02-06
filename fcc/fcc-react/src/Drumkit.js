import React from 'react';

const keys = [
  {
    letter: 'Q',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    letter: 'W',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    letter: 'E',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    letter: 'A',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    letter: 'S',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    letter: 'D',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    letter: 'Z',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    letter: 'X',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    letter: 'C',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const Pad = props => (
  <div class="drum-pad" id={props.clip}>
    {props.letter}
  </div>
);

class Drumkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: '',
      markedText: ''
    };
  }

  render() {
    return (
      <div class="outside-box" id="drum-machine">
        <h1>Bart's Drumkit</h1>
        <div class="grid">
          {keys.map(key => (
            <Pad props={key} />
          ))}
        </div>
        <div id="display">This is the display</div>
      </div>
    );
  }
}

export default Drumkit;
