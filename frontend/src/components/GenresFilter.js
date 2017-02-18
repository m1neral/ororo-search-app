import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setGenresFilterValue, fetchShows } from '../actions';

const defaultValue = [];

class GenresFilter extends Component {
    constructor(props) {
        super(props);

        const { genres, onGenresChange } = props;
        const selectableGenres = genres.map(genre => ({ label: genre, value: genre }));

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
                name='form-field-filter-genres'
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
};

const mapStateToProps = (_, ownProps) => ({
    genres: ownProps.genres
});

const mapDispatchToProps = (dispatch) => ({
    onGenresChange(value) {
        dispatch(setGenresFilterValue(value));
        dispatch(fetchShows());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresFilter);
