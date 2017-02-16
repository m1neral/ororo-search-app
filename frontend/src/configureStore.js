import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import searchApp from './reducers';

const configureStore = () => {
    const middlewares = [thunk, createLogger()];

    return createStore(
        searchApp,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
