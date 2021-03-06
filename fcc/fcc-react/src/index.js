import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Markdown from './Markdown';
//import Drumkit2 from './Drumkit2';
//import Calculator from './Calculator';
import Pomodoro from './Pomodoro';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Pomodoro />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
