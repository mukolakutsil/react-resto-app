import React from 'react';
import { MenuListItem } from '../menu-list-item';

const View = ({ menuItems, addedToCart, openInfo }) => {
    return (
        <ul className="menu__list">
            {
                menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} addedToCart={addedToCart} openInfo={openInfo} menuItem={menuItem} />
                })
            }
        </ul>
    )
}


export default View;