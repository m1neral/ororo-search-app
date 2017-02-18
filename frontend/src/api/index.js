import axios from 'axios';

const API_ADRESS_PREFIX = '/api/v1/';
const FETCH_SHOWS_URL = `${API_ADRESS_PREFIX}shows`;
const SEND_SEARCH_QUERY_INFO_URL = `${API_ADRESS_PREFIX}client_search_queries`;

const mapFiltersAndOrderToParams = (params) => {
    const { filters, order } = params;

    // TODO: Refactoring or use ready solution
    return Object.keys(filters).reduce((acc, filter) =>
        acc + filters[filter].reduce((memo, filterValue) =>
            `${memo}${filter}[]=${filterValue}&`, ''), '')
                + (order.length ? `order=${order}` : '');
};

export const fetchShows = (params) => axios.get(FETCH_SHOWS_URL + '?' + mapFiltersAndOrderToParams(params));
export const sendSearchQueryInfo = (params) => axios.post(SEND_SEARCH_QUERY_INFO_URL, params);
