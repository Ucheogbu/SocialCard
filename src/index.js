import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Socialcard from './App';

ReactDOM.render(<Socialcard />, document.getElementById('root'));
// ReactDOM.render(<Socialcard />, document.getElementById('second'));

registerServiceWorker();
