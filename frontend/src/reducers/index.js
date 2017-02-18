import { combineReducers } from 'redux';
import searchesInfo from './searchesInfo';
import shows from './shows';
import filters from './filters';
import order from './order';
import query from './query';

const searchApp = combineReducers({
    searchesInfo,
    shows,
    filters,
    order,
    query
});

export default searchApp;
