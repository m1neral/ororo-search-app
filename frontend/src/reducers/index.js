import { combineReducers } from 'redux';
import searchesInfo from './searchesInfo';
import shows from './shows';

const searchApp = combineReducers({
    searchesInfo,
    shows
});

export default searchApp;
