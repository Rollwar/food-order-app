import CartContext from "./cart-context";


const CartProvider = (props) => {

const addItemToCardHandler = (item) => {};

const removeItemFromCartHandler = (id) => {};

const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemToCardHandler,
    removeItem: removeItemFromCartHandler,
};

    return <CartContext.Provider>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;