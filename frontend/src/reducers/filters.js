import { combineReducers } from 'redux';

// Got from 'lib/tools/get_genres.rb'
export const GENRES = [
    'Comedy',
    'Drama',
    'Romance',
    'Action',
    'History',
    'War',
    'Fantasy',
    'Horror',
    'Crime',
    'Mystery',
    'Adventure',
    'Sci-Fi',
    'Thriller',
    'Animation',
    'Family',
    'Western',
    'Reality-TV',
    'Music',
    'Education',
    'Documentary',
    'Biography',
    'Game-Show',
    'Sport',
    'Talk-Show'
];

const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES_FILTER_VALUE':
            return action.value ? action.value.split(',') : [];
        default:
            return state;
    }
};

const filters = combineReducers({
    genres
});

export default filters;
