import React, { PropTypes } from 'react';
import { Badge } from 'reactstrap';
import { connect } from 'react-redux';

const InfoBadge = ({ searchesCount, averageResultsCount }) => (
    <h6>
        Number of searches: <Badge>{searchesCount || 'x'}</Badge>
        {' | '}
        Average number of results: <Badge>{averageResultsCount || 'x'}</Badge>
    </h6>
);

InfoBadge.PropTypes = {
    searchesCount: PropTypes.number.isRequired,
    averageResultsCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
    ...state.searchesInfo
});

export default connect(
    mapStateToProps
)(InfoBadge);
