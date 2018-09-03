import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuestBook from '../src/components/GuestBook';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GuestBook />, document.getElementById('root'));
registerServiceWorker();
