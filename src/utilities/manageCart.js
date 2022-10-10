const addToLS = (id) => {
    let shoppingCart;

    console.log(shoppingCart);

    // get the shopping cart
    const cartStatus = localStorage.getItem("shopping-cart");
    if (cartStatus) {
        shoppingCart = JSON.parse(cartStatus);
    } else {
        shoppingCart = {};
        console.log(shoppingCart);
        console.log(shoppingCart[id]);
    }

    console.log(shoppingCart[id]);

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = +quantity + 1;
        shoppingCart[id] = newQuantity;
        console.log(shoppingCart[id]);
    } else {
        shoppingCart[id] = 1;        
        console.log(shoppingCart[id]);
        console.log(shoppingCart[id]);
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const removeFromLS = (id) => {
    const cartStatus = localStorage.getItem("shopping-cart");
    if (cartStatus) {
        const shoppingCart = JSON.parse(cartStatus);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
        }
    }
};

export { addToLS, removeFromLS };
