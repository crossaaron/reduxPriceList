import React, { Component } from 'react'
import {connect} from "react-redux";
import { removeFromCart } from "../reducers/action";

class GroceryCart extends Component {
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

function mapStateToProps(state) {
    return {
        items: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (index) => {
            dispatch(removeFromCart(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryCart)