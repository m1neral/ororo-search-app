export const ORDERS = [
    { label: 'Most Popular first', value: '' }, // default
    { label: 'Latest released first', value: 'latest' }
];

const order = (state = '', action) => {
    switch (action.type) {
        case 'SET_ORDER_VALUE':
            return action.value;
        default:
            return state;
    }
};

export default order;