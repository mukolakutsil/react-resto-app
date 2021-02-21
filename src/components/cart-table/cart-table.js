import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart, addedToNumber, removeFromNumber } from '../../actions'
import './cart-table.scss';

const CartTable = ({ items, deleteFromCart, addedToNumber, removeFromNumber }) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        return (
                            <div key={item.id} className="cart__item">
                                <img src={item.url} className="cart__item-img" alt={item.title}></img>
                                <div className="cart__item-title">{item.title}</div>
                                <div className="cart__item-price">{item.price}$</div>
                                <div className="cart__item-number">
                                    <span
                                        className="cart__item-plus"
                                        onClick={() => { addedToNumber(item.id) }}
                                    > +
                                    </span>
                                    <span
                                        className="cart__item-num"
                                    > {item.counterIdentical}
                                    </span>
                                    <span className="cart__item-minus"
                                        onClick={() => { removeFromNumber(item.id) }}
                                    > -
                                    </span>

                                </div>
                                <div
                                    onClick={() => {
                                        deleteFromCart(item.id)
                                    }}
                                    className="cart__close"
                                > &times;
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToprops = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    addedToNumber,
    removeFromNumber
}

export default connect(mapStateToprops, mapDispatchToProps)(CartTable);