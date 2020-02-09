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

class Drumkit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLetter: ''
    };
  }
  updateDisplay({ letter }) {
    this.setState({ myLetter: letter });
  }
  render() {
    const playTune = e => {
      let idx = keys.map(e => e.id).indexOf(e.target.id);
      const url = document.getElementsByClassName('clip')[idx];
      let audio = new Audio(url);
      //sound.currentTime = 0;
      audio.play();
      //this.setState({ myLetter: keys[idx].id });
      //this.props.updateDisplay('b');
    };

    const Pad = ({ id, letter, clip, playTune }) => (
      <button className="drum-pad" id={id} onClick={e => playTune(e)}>
        <audio src={clip} type="audio/mpeg" className="clip" id={letter} />
        {letter}
      </button>
    );
    const Display = ({ letter }) => <div id="display">{letter}</div>;

    return (
      <div className="outside-box" id="drum-machine">
        <h1>Bart's Drumkit</h1>
        <div className="grid">
          {keys.map(key => (
            <Pad
              id={key.id}
              letter={key.letter}
              clip={key.clip}
              playTune={playTune}
              updateDisplay={this.updateDisplay}
            />
          ))}
        </div>
        <Display />
      </div>
    );
  }
}

export default Drumkit;
