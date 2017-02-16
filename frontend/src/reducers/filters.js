import { combineReducers } from 'redux';

const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.genres.slice();
        default:
            return state;
    }
};

const filters = combineReducers({
    genres
});

export default filters;