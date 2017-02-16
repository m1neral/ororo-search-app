import { combineReducers } from 'redux';

const fetchedShows = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SHOWS_SUCCESS':
            return action.response.data.shows;
        default:
            return state;
    }

};

const queriedShowsIds = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_SHOWS_BY_QUERY':
            return action.ids.slice();
        default:
            return state;
    }

};

const isFetching = (state = false, action) => {
    switch (action.type) {
      case 'FETCH_SHOWS_REQUEST':
        return true;
      case 'FETCH_SHOWS_SUCCESS':
      case 'FETCH_SHOWS_FAILURE':
        return false;
      default:
        return state;
    }
};

const shows = combineReducers({
    fetchedShows,
    queriedShowsIds,
    isFetching
});

export default shows;
