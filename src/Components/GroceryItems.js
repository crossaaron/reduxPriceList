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

import React, { Component } from 'react'

export default class GroceryItems extends Component {
    render() {
        return (
            <div id='grocery-items'>
                <table border="1">
                    <tbody>
                        <tr>
                            <th>ItemPrice</th>
                            <th>Item Name</th>
                        </tr>
                        {GROCERY_ITEMS.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <button>
                                            Add to Cart
                                        </button>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <p>
                    Total: $0.00
                </p>
            </div>
        )

    }
}