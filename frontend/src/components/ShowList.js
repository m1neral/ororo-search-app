import '../styles/shows.css';

import React, { PropTypes, Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShowList extends Component {
    componentDidMount() {
        const { fetchShows } = this.props;
        fetchShows();
    }

    render() {
        const { showList } = this.props;
        const tableBody = showList.map(show => (
            <tr key={show.id}>
                <th scope="row">{show.id}</th>
                <td>{show.name}</td>
                <td>{show.array_genres.join(', ')}</td>
                <td>{show.year}</td>
            </tr>
        ));

        return (
            <Table bordered striped className='table-sm shows-table'>
                <thead className='thead-inverse'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Genres</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>{tableBody}</tbody>
            </Table>
        );
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

export default connect(mapStateToProps, actions)(ShowList);
