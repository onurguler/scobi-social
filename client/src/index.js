import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Bootstrap dependencies
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
import Popper from 'popper.js';
// Custom CSS
import './css/build/style.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
