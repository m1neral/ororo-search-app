import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import 'nprogress/nprogress.css';

import NProgress from 'nprogress';
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

// Simple loading indicator
// TODO: Move from there.
NProgress.start();
store.subscribe(() => {
    const { shows: { isFetching } } = store.getState();
    isFetching ? NProgress.start() : NProgress.done();
});
