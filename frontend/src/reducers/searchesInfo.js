const searchesInfo = (state = {}, action) => {
    if (action.response) {
        return {
            searchesCount: action.response.searches_count,
            averageResultsCount: action.response.average_results_count
        }
    }
    return state;
};

export default searchesInfo;
