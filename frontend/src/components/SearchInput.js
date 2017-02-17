import React, { PropTypes, Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';

const SearchInput = () => (
    <Form>
        <FormGroup>
            <Input type='text' name='query' id='query-search' placeholder='Search...' />
        </FormGroup>
    </Form>
);

export default SearchInput;
