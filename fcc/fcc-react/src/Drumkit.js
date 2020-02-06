import React from 'react';

const keys = [
  {
    letter: 'Q',
    id: 'Heater-1',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    letter: 'W',
    id: 'Heater-2',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    letter: 'E',
    id: 'Heater-3',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    letter: 'A',
    id: 'Heater-4_1',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    letter: 'S',
    id: 'Heater-6',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    letter: 'D',
    id: 'Dsc_Oh',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    letter: 'Z',
    id: 'Kick_n_Hat',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    letter: 'X',
    id: 'RP4_KICK_1',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    letter: 'C',
    id: 'Cev_H2',
    clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const Pad = props => (
  <div class="drum-pad" id={props.id}>
    <audio src={props.clip} type="audio/mpeg" class="clip" id={props.letter} />
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
            <Pad id={key.id} letter={key.letter} clip={key.clip} />
          ))}
        </div>
        <div id="display">This is the display</div>
      </div>
    );
  }
}

export default Drumkit;
