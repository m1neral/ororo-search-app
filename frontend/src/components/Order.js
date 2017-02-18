import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setOrderValue, fetchShows } from '../actions';

class Order extends Component {
    constructor(props) {
        super(props);

        const { orders, onOrderChange } = props;
        const selectableOrders = orders.map(order => ({ ...order, clearableValue: false}));

        this.onOrderChange = onOrderChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            options: selectableOrders,
            value: selectableOrders[0]
        };
    }

    handleSelectChange(value) {
        this.setState({ value });
        this.onOrderChange(value);
    }

    render() {
        return (
            <Select
                name='form-field-order'
                options={this.state.options}
                onChange={this.handleSelectChange}
                value={this.state.value}
                simpleValue
                clearable={false}
            />
        );
    }
}

const mapStateToProps = (_, ownProps) => ({
    orders: ownProps.orders
});

const mapDispatchToProps = (dispatch) => ({
    onOrderChange(value) {
        dispatch(setOrderValue(value));
        dispatch(fetchShows());
    }
});

Order.propTypes = {
    onOrderChange: PropTypes.func.isRequired,
    orders: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);