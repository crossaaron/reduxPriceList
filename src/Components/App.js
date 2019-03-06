import React, { Component } from 'react'
import GroceryItems from "./GroceryItems";
import GroceryCart from './GroceryCart';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []

        }
    }

    render() {
        return (
            <div id='app-container'>
                <h1>React Template</h1>
                <p> Magic starts here</p>
                <div id='grocery-container'>
                    <GroceryItems />
                    <GroceryCart items={this.state.cart} />
                </div>
            </div>
        )

    }
}