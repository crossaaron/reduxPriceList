const GROCERY_ITEMS = [
    {name: 'Sliced bacon', price: 3.66},
    {name: 'Pasta',	price: 0.88},
    {name: 'Dried beans', price: 0.94},
    {name: 'Ground beef', price: 2.85},
    {name: 'All-purpose flour', price: 0.36},
    {name: 'Creamy peanut butter', price: 1.79},
    {name: 'Top round steak', price: 4.11},
    {name: 'Potatoes', price: 0.52},
    {name: 'Frozen turkey',	price: 1.15},
    {name: 'Sirloin steak',	price: 5.97},
    {name: 'White rice', price: 0.55},
    {name: 'Chocolate chip cookies', price: 2.70},
    {name: 'Seedless grapes', price: 2.09},
    {name: 'Sugar',	price: 0.51},
    {name: 'Ice cream',	price: 3.95},
];


const cartReducer = (state, action) => {
    console.log('action:', action);
    if (state === undefined) {
        return {
            forSale: GROCERY_ITEMS,
            cart: []
        }
    }

    switch (action.type) {
        case 'ADD_TO_CART': {
            const cart = [...state.cart, action.item];
            return {
                ...state,
                cart
            }
        }
        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart];
            cart.splice(action.index, 1);
            return {
                ...state,
                cart
            }
        }
        default: {
            return state;
        }
    }
};

export default cartReducer