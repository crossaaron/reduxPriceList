import React, { Component } from 'react'

export default class GroceryCart extends Component {
    total() {
        return this.props.items.reduce((total, item) => {
            return total + item.price
        }, 0)
    }

    render() {
        if (this.props.items.length === 0) {
            return (
                <div id='grocery-cart'>
                    <p>Cart is Empty</p>
                </div>
            )
        }
        return (
            <div id='grocery-cart'>
                <table border="1">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>ItemPrice</th>
                            <th>Item Name</th>
                        </tr>
                        {this.props.items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <button onClick={() => this.props.removeFromCart(index)}>
                                            Remove Cart
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
                    Total: ${this.total()}
                </p>
            </div>
        )

    }
}