import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromCart, addedToNumber, removeFromNumber, makedOrder } from '../../actions'
import WithRestoService from '../hoc';
import { addedToCartbtn } from '../menu-list-item';
import './cart-table.scss';

const CartTable = ({ items, deleteFromCart, addedToNumber, removeFromNumber, RestoService, makedOrder }) => {

    if (items.length === 0) {
        return (
            <>
                <div className="cart__title">Your cart is empty :(</div>
                <div className="btn-wrap">
                    <Link to='/'>
                        {addedToCartbtn(true, 'Back to menu')}
                    </Link>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item => {
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
                <div className="btn-wrap">
                    <button
                        className="menu__btn"
                        onClick={() => {
                            RestoService.setOrder(generateOrder(items));
                            makedOrder()
                        }}>
                        Make an order
                            </button>
                </div>
            </div>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            counterIdentical: item.counterIdentical
        }
    })
    return newOrder;
}

const mapStateToprops = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = {
    deleteFromCart,
    addedToNumber,
    removeFromNumber,
    makedOrder
}

export default WithRestoService()(connect(mapStateToprops, mapDispatchToProps)(CartTable));