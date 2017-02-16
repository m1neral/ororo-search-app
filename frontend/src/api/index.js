import axios from 'axios';

const SHOWS_URL = '/api/v1/shows';

const mapFiltersAndOrderToParams = (params) => {
    const { filters, order } = params;

    // TODO: Refactoring or use ready solution
    return Object.keys(filters).reduce((acc, filter) =>
        acc + filters[filter].reduce((memo, filterValue) =>
            `${memo}${filter}[]=${filterValue}&`, ''), '')
                + (order.length ? `order=${order}` : '');
};

export const fetchShows = (params) => axios.get(SHOWS_URL + '?' + mapFiltersAndOrderToParams(params);
