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

import { UNDO, REDO, REMOVE_FROM_CART, ADD_TO_CART } from './action.js';

const cartReducer = (state, action) => {
    console.log('action:', action);
    if (state === undefined) {
        return {
            forSale: GROCERY_ITEMS,
            cart: [],
            history: [[]],
            historyIndex: 0
        }
    }

    switch (action.type) {
        case UNDO: {
            let historyIndex = state.historyIndex - 1;
            historyIndex = Math.max(historyIndex, 0);

            return {
                ...state,
                cart: state.history[historyIndex],
                historyIndex
            }
        }

        case REDO: {
            let historyIndex = state.historyIndex + 1;
            historyIndex = Math.min(historyIndex, state.history.length -1);

            return {
                ...state,
                cart: state.history[historyIndex],
                historyIndex
            }
        }

        case ADD_TO_CART: {
            const cart = [...state.cart, action.item];

            const history = [...state.history];
            history.splice(state.historyIndex + 1, state.history.length);
            history.push(cart);
            const historyIndex = history.length - 1;


            return {
                ...state,
                cart,
                history,
                historyIndex
            }
        }
        case REMOVE_FROM_CART: {
            const cart = [...state.cart];
            cart.splice(action.index, 1);

            const history = [...state.history];
            history.splice(state.historyIndex + 1, state.history.length);
            history.push(cart);
            const historyIndex = history.length - 1;

            return {
                ...state,
                cart,
                history,
                historyIndex
            }
        }
        default: {
            return state;
        }
    }
};

export default cartReducer