import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('ororo-search-app')
);
