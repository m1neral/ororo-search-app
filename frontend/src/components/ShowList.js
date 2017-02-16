import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShowList extends Component {
    componentDidMount() {
        const { fetchShows } = this.props;
        fetchShows();
    }

    render() {
        const { showList } = this.props;
        return (<div>SHOWS</div>);
    }
}

ShowList.propTypes = {
    fetchShows: PropTypes.func.isRequired,
    showList: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
    // If shows filtered by query (from client)
    if (state.shows.queriedShowsIds.length) {
        // TODO: refactoring: move logic to another module
    } else {
        return {
            showList: state.shows.fetchedShows
        };
    }
};

export default connect(
    mapStateToProps,
    actions
)(ShowList);