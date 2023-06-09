const addProductToCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
    );

    const updatedColorIndex = updatedCart.findIndex(
        (item) => item.color === payload.color
    );
    if (updatedItemIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
    } else if (updatedColorIndex < 0) {
        updatedCart.push({ ...payload, quantity: 1 });
    } else {
        const updatedItem = { ...updatedCart[updatedItemIndex || updatedColorIndex] };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex || updatedColorIndex] = updatedItem;
    }
    return {
        ...state,
        cart: updatedCart,
        total: state.total + payload.price,
    };
};
const decrementProductFromCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
    );
    const updatedColorIndex = updatedCart.findIndex(
        (item) => item.color === payload.color
    );
    const updatedItem = { ...updatedCart[updatedItemIndex || updatedColorIndex] };
    if (updatedItem.quantity === 1) {
        const filteredCartWithId = updatedCart.filter((item) => item.id !== payload.id);
        const filteredCartWithColor = updatedCart.filter((item) => item.color !== payload.color);
        return {
            ...state,
            cart: filteredCartWithId && filteredCartWithColor,
            total: state.total - payload.price,
        };
    } else {
        updatedItem.quantity--;
        updatedCart[updatedItemIndex || updatedColorIndex] = updatedItem;
        return {
            ...state,
            cart: updatedCart,
            total: state.total - payload.price,
        };
    }
};

const removeProductFromCart = (state, payload) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === payload.id
    );
    const updatedColorIndex = updatedCart.findIndex(
        (item) => item.color === payload.color
    );
    const updatedItem = { ...updatedCart[updatedItemIndex || updatedColorIndex] };
    if (updatedItem.quantity) {
        const filteredCartWithId = updatedCart.filter((item) => item.id !== payload.id);
        const filteredCartWithColor = updatedCart.filter((item) => item.color !== payload.color);
        return {
            ...state,
            cart: filteredCartWithId && filteredCartWithColor,
            total: state.total - payload.price * payload.quantity,
        };
    }
};
const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return addProductToCart(state, action.payload);
        case "DECREMENT_PRODUCT":
            return decrementProductFromCart(state, action.payload);
        case "REMOVE_PRODUCT":
            return removeProductFromCart(state, action.payload);
        default:
            return state;
    }
};

export default cartReducer;