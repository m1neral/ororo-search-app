const searchesInfo = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SEARCHES_INFO':
            return {
                searchesCount: action.response.data.searches_count,
                averageResultsCount: action.response.data.average_results_count
            };
        default:
            return state;
    }
};

export default searchesInfo;
