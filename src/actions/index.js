const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    }
}

const menuError = () => {
    return {
        type: 'MENU_ERROR',
    }
}

const addedToCart = (id) => {
    return {
        type: 'ADD_ITEM_TO_CART',
        payload: id,
    }
}

const deleteFromCart = (id) => {
    return {
        type: 'DELETE_FROM_CART',
        payload: id,
    }
}

const addedToNumber = (id) => {
    return {
        type: 'ADDED_TO_NUMBER',
        payload: id,
    }
}

const removeFromNumber = (id) => {
    return {
        type: 'REMOVE_FROM_NUMBER',
        payload: id,
    }
}
export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    addedToNumber,
    removeFromNumber
}