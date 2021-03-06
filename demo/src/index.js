import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './stores/TodoStore';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
