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

class Drumkit2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myLetter: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  handleClick(letter, sound) {
    this.setState({ myLetter: letter });
    let audio = new Audio(sound);
    audio.play();
  }
  onKeyPress = event => {
    const keyName = event.key;
    let keyPressed = ' ';

    for (let i = 0; i < keys.length; i++) {
      if (keyName === keys[i].letter.toLowerCase()) {
        var audio = new Audio(keys[i].clip);
        audio.play();
        keyPressed = keys[i].id;
        this.setState({ myLetter: keyPressed });
      }
    }
  };
  render() {
    return (
      <div
        className="outside-box"
        id="drum-machine"
        onKeyPress={this.onKeyPress}
      >
        <h1>Bart's Drumkit</h1>
        <div className="grid">
          {keys.map(key => (
            <button
              className="drum-pad"
              id={key.id}
              onClick={() => {
                this.handleClick(key.id, key.clip);
              }}
            >
              {key.letter}
              <audio
                src={key.clip}
                type="audio/mpeg"
                className="clip"
                id={key.letter}
              />
            </button>
          ))}
        </div>
        <div id="display">{this.state.myLetter}</div>
      </div>
    );
  }
}

export default Drumkit2;
