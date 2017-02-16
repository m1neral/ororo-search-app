import { combineReducers } from 'redux';
import searchesInfo from './searchesInfo';
import shows from './shows';
import filters from './filters';
import order from './order';

const searchApp = combineReducers({
    searchesInfo,
    shows,
    filters,
    order
});

export default searchApp;
