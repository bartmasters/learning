import React, { Component } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';

const kit = [
  {
    name: 'Q',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633106/PiccoloA.wav',
    str: 'PiccoloA'
  },
  {
    name: 'W',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633106/Crash.wav',
    str: 'Crash'
  },
  {
    name: 'E',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633106/LudFlamC.wav',
    str: 'LudFlamC'
  },
  {
    name: 'A',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633105/KesKick.wav',
    str: 'KesKick'
  },
  {
    name: 'S',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633104/Sab_PdHat.wav',
    str: 'Sab PdHat'
  },
  {
    name: 'D',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633104/KHats_Open.wav',
    str: 'KHats Open'
  },
  {
    name: 'Z',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633104/Acoustic_Hat.wav',
    str: 'Acoustic Hat'
  },
  {
    name: 'X',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633104/AcouKick.wav',
    str: 'AcouKick'
  },
  {
    name: 'C',
    audio:
      'https://res.cloudinary.com/dbqmzdcea/video/upload/v1530633104/Acoustic_Snare.wav',
    str: 'Acoustic Snare'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress = event => {
    var keyPressed = ' ';
    const keyName = event.key;
    for (let i = 0; i < kit.length; i++) {
      if (keyName === kit[i].name.toLowerCase()) {
        var audio = new Audio(kit[i].audio);
        audio.play();
        keyPressed = kit[i].str;
        this.setState({ active: keyPressed });
      }
    }
  };

  handleClick(str, sound) {
    this.setState({ active: str });
    var audio = new Audio(sound);
    audio.play();
  }

  render() {
    return (
      <div className="App" onKeyPress={this.onKeyPress}>
        <section id="display">
          <header id="title">
            <h1>
              {this.state.active === '' ? 'Drum Machine' : this.state.active}
            </h1>
          </header>
          <Row>
            {kit.map(x => (
              <Col xs={6} md={4} className="text-center" key={x.audio}>
                <button
                  className="drum-pad"
                  id={x.str}
                  onClick={() => {
                    this.handleClick(x.str, x.audio);
                  }}
                >
                  <div className="icon">
                    <i class="fas fa-drum fa-lg"></i>
                  </div>
                  <div>{x.name}</div>
                  <audio className="clip" id={x.name} src={x.audio}></audio>
                </button>
              </Col>
            ))}
          </Row>
        </section>
      </div>
    );
  }
}
