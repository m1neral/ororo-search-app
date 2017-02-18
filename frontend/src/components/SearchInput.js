import React, { PropTypes, Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { setQueriedShows, sendSearchQueryInfo } from '../actions';

class SearchInput extends Component {
    constructor(props) {
        super(props);
        const { onQueryChange } = props;

        this.onChange = this.onChange.bind(this);
        this.onQueryChange = debounce(onQueryChange.bind(this), 500);
        this.state = {
            value: ''
        };
    }

    onChange(event) {
        const value = event.target.value;

        this.setState({ value });
        this.onQueryChange(value);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Input type='text'
                           name='query'
                           id='query-search'
                           placeholder='Search...'
                           value={this.state.value}
                           onChange={this.onChange}
                    />
                </FormGroup>
            </Form>
        );
    }
}

SearchInput.propTypes = {
    onQueryChange: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onQueryChange(value) {
        dispatch(setQueriedShows(value));
        dispatch(sendSearchQueryInfo());
    }
});

export default connect(null, mapDispatchToProps)(SearchInput);
