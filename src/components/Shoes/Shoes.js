import React from 'react';
import {add, multiply} from '../../utilities/calculate';
import './Shoes.css';

const Shoes = () => {

    const first = 30;
    const second = 55;
    const totalProducts = add(first, second);
    const totalPrice = multiply(first, second);
    
    return (
        <div className='shoe'>
            <h1>Shoes Store</h1>
            <h3>Total Products: {totalProducts}</h3>
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default Shoes;