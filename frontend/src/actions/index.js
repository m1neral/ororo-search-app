import { * as api } from '../api';

export const fetchShows = (params) => (dispatch, getState) {
    dispatch({
        type: 'FETCH_SHOWS_REQUEST'
    });

    return api.fetchShows(params).then(
        response => {
            dispatch({
                type: 'FETCH_SHOWS_SUCCESS',
                response
            });
        },
        error => {
            // dispatch 'FETCH_SHOWS_FAILURE' and render error text
        }
    );
};
