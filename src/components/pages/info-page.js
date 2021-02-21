import React from 'react';
import { connect } from 'react-redux';
import { addedToCartbtn } from '../menu-list-item';
import { addedToCart } from '../../actions/';
import { Link } from 'react-router-dom';

import './index.scss';

const InfoPage = ({ openedInfo, addedToCart }) => {

    const { title, url, price, infoText, id } = openedInfo;
    return (
        <>

            <header className="title">

                <span className="text">{title}</span>
                <span className="price">{price}$</span>

            </header>

            <section className="wrapper">

                <img alt={title} className="pic" src={url}></img>
                <div className="text">{infoText}</div>
                <div className="text">{infoText}</div>
                <div className="text">{infoText}</div>
                <div className="text">{infoText}</div>
                <div className="text">{infoText}</div>

                {addedToCartbtn(false, 'Add to cart', addedToCart, id)}
                <Link to='/'>
                    {addedToCartbtn(true, 'Back to menu')}
                </Link>

            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        openedInfo: state.openedInfo
    }
}

const mapDispatchToProps = {
    addedToCart
}



export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);