import React from 'react'
import ReactDOM from  'react-dom'

import App from './Components/App'
import './style.css'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import cartReducer from './reducers/cart-reducer'

const store = createStore(cartReducer);

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));
