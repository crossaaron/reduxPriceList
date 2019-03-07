import React, { Component } from 'react'
import { connect } from 'react-redux'


class GroceryItems extends Component {
    render() {
        return (
            <div id='grocery-items'>
                <table border="1">
                    <tbody>
                        <tr>
                            <th>ItemPrice</th>
                            <th>Item Name</th>
                        </tr>
                        {this.props.items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <button onClick={() => this.props.addToCart(item)}>
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
            </div>
        )

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                item
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        items: state.forSale
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryItems)