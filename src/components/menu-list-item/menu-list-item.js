import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';

export const addedToCartbtn = (bool, title, func, id) => {

    if (bool) {
        return (
            <button className="menu__btn">
                {title}
            </button>
        )
    }

    return (
        <button
            onClick={() => {
                func(id)
            }}
            className="menu__btn"
        >{title}
        </button>
    )
}


export const MenuListItem = ({ menuItem, addedToCart, openInfo }) => {

    const { title, url, category, price, id } = menuItem;



    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt="Cesar salad"></img>
            <div className="menu__category">
                Category: <span>{category}</span>
            </div>
            <div className="menu__price">
                Price: <span>{`${price}$`}</span>
            </div>

            {addedToCartbtn(false, 'Add to cart', addedToCart, id)}

            <Link to={`/info/${menuItem.id}`}>
                {addedToCartbtn(false, 'Information', openInfo, id,)}
            </Link>
        </li>
    )
}
