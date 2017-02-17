import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { GENRES } from '../reducers/filters';
import { setGenresFilterValue, fetchShows } from '../actions';

const selectableGenres = GENRES.map(genre => ({ label: genre, value: genre }));
const defaultValue = [];

class GenresFilter extends Component {
    constructor(props) {
        super(props);

        const { genres, onGenresChange } = props;

        this.onGenresChange = onGenresChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            options: selectableGenres,
            value: defaultValue
        };
    }

    handleSelectChange(value) {
        this.setState({ value });
        this.onGenresChange(value);
    }

    render() {
        return (
            <Select
                name='form-field-name'
                placeholder='Select genre(s)'
                options={this.state.options}
                onChange={this.handleSelectChange}
                value={this.state.value}
                simpleValue
                multi
            />
        );
    }
}

GenresFilter.PropTypes = {
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    onGenresChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    genres: state.filters.genres
});

const mapDispatchToProps = (dispatch) => ({
    onGenresChange(value) {
        dispatch(setGenresFilterValue(value));
        dispatch(fetchShows());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresFilter);
