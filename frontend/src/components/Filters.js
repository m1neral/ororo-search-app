import React from 'react';
import GenresFilter from './GenresFilter';
import Order from './Order';
import { GENRES } from '../reducers/filters';
import { ORDERS } from '../reducers/order';

const Filters = () => (
    <div>
        <h5>Filters: </h5>
        <GenresFilter genres={GENRES}/>
        <h5 className='order-label'>Order: </h5>
        <Order orders={ORDERS}/>
    </div>
);

export default Filters;
