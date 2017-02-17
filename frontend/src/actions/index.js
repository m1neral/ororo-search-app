import * as api  from '../api';

export const fetchShows = () => (dispatch, getState) => {
    const { filters, order } = getState();

    dispatch({
        type: 'FETCH_SHOWS_REQUEST'
    });
    // TODO: need debounce
    return api.fetchShows({ filters, order }).then(
        response => {
            dispatch({
                type: 'FETCH_SHOWS_SUCCESS',
                response
            });
            dispatch({
                type: 'SET_SEARCHES_INFO',
                response
            });
        },
        error => {
            // dispatch 'FETCH_SHOWS_FAILURE' and render error text
        }
    );
};

export const setGenresFilterValue = (value) => ({
    type: 'SET_GENRES_FILTER_VALUE',
    value
});
