import React, { useEffect, useState } from 'react';
import {add, multiply} from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';


const Cosmetics = () => {

    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, []);
    
    return (
        <div className='cosmetic'>
            <h1>Cosmetics Store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;