import React from "react";
import { addToLS, removeFromLS } from "../../utilities/manageCart";
import "./Cosmetic.css";

const Cosmetic = (props) => {
    const { name, id, price } = props.cosmetic;

    const addToCart = (id) => {
        addToLS(id);
    };

    // const addToCartWithParam = () => addToCart(id);

    const removeFromCart = () => {
        removeFromLS(id);
    };
    const reduceFromCart = () => {
        removeFromLS(id);
    };
    const increaseToCart = () => {
        removeFromLS(id);
    };
    return (
        <div className="product">
            <h3>Product Name: {name}</h3>
            <h5>Product ID: {id}</h5>
            <h5>Product Price: ${price}</h5>
            {/* <button onClick={addToCartWithParam}>Add To Cart</button> */}
            <button onClick={() => reduceFromCart(id)}>-</button>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove From Cart</button>
            <button onClick={() => increaseToCart(id)}>+</button>
        </div>
    );
};

export default Cosmetic;
