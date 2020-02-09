import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Markdown from './Markdown';
import Drumkit2 from './Drumkit2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Drumkit2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
