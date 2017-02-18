import * as api  from '../api';

export const fetchShows = () => (dispatch, getState) => {
    const { filters, order, query: { value } } = getState();

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
            dispatch({
                type: 'FILTER_SHOWS_BY_QUERY',
                query: value,
                fetchedShows: response.data.shows
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

export const setOrderValue = (value) => ({
    type: 'SET_ORDER_VALUE',
    value
});

export const sendSearchQueryInfo = () => (dispatch, getState) => {
    const {
        filters: { genres },
        order,
        query: { value },
        shows: { queriedShows }
    } = getState();

    if (!value) {
        return Promise.resolve();
    }

    dispatch({
        type: 'SEND_SEARCH_QUERY_INFO_REQUEST'
    });

    const searchQueryInfo = {
        query: value,
        order,
        genres,
        results_count: queriedShows.length
    };

    return api.sendSearchQueryInfo(searchQueryInfo).then(
        response => {
            dispatch({
                type: 'SEND_SEARCH_QUERY_INFO_SUCCESS',
                response
            });
            dispatch({
                type: 'SET_SEARCHES_INFO',
                response
            });
        },
        error => {
            // dispatch 'SEND_SEARCH_QUERY_INFO_FAILURE' and render error text
        }
    );
};

export const setQueriedShows = (value) => (dispatch, getState) => {
    dispatch({
        type: 'SET_QUERY_VALUE',
        value
    });

    const { shows: { fetchedShows } } = getState();

    dispatch({
        type: 'FILTER_SHOWS_BY_QUERY',
        query: value,
        fetchedShows
    });
};