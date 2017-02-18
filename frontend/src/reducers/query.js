import { combineReducers } from 'redux';

const isSending = (state = false, action) => {
    switch (action.type) {
        case 'SEND_SEARCH_QUERY_INFO_REQUEST':
            return true;
        case 'SEND_SEARCH_QUERY_INFO_SUCCESS':
        case 'SEND_SEARCH_QUERY_INFO_FAILURE':
            return false;
        default:
            return state;
    }
};

const value = (state = '', action) => {
    switch (action.type) {
        case 'SET_QUERY_VALUE':
            return action.value;
        default:
            return state;
    }
};

const query = combineReducers({
    isSending,
    value
});

export default query;