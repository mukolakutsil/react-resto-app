import React from 'react';
import MenuListItem from '../menu-list-item';

const View = ({ menuItems, addedToCart }) => {
    return (
        <ul className="menu__list">
            {
                menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} addedToCart={addedToCart} menuItem={menuItem} />
                })
            }
        </ul>
    )
}


export default View;