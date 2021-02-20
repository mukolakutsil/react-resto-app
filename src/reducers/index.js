const initialState = {
    menu: [],
    loading: true,
    items: [],
    total: 0,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
                menu: state.menu,
                loading: true
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: state.loading,
                error: true
            };
        case 'ADD_ITEM_TO_CART':

            const id = action.payload;

            const itemInd = state.items.findIndex(item => item.id === id);

            if (itemInd >= 0) {
                const elemInState = state.items.find(item => item.id === id);
                const newElem = {
                    ...elemInState,
                    counterIdentical: ++elemInState.counterIdentical
                }
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, itemInd),
                        newElem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    total: state.total + newElem.price
                }
            }

            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                id: item.id,
                counterIdentical: 1
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total: state.total + newItem.price
            };

        case 'DELETE_FROM_CART':

            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['counterIdentical'];

            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: state.total - price,
            };

        case 'ADDED_TO_NUMBER':

            const elemId = action.payload;

            const elemInd = state.items.findIndex(item => item.id === elemId);

            const elemInState = state.items.find(item => item.id === elemId);
            const newElem = {
                ...elemInState,
                counterIdentical: ++elemInState.counterIdentical
            }
            return {
                ...state,
                items: [
                    ...state.items.slice(0, elemInd),
                    newElem,
                    ...state.items.slice(elemInd + 1)
                ],
                total: state.total + newElem.price
            };

        case 'REMOVE_FROM_NUMBER':

            const elemIdx = action.payload;

            const elemIndx = state.items.findIndex(item => item.id === elemIdx);

            const elemInStateItems = state.items.find(item => item.id === elemIdx);
            const newElement = {
                ...elemInStateItems,
                counterIdentical: --elemInStateItems.counterIdentical
            }


            if (newElement.counterIdentical === 0) {

                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, elemIndx),
                        ...state.items.slice(elemIndx + 1)
                    ],
                    total: state.total - newElement.price,
                };

            }

            return {
                ...state,
                items: [
                    ...state.items.slice(0, elemIndx),
                    newElement,
                    ...state.items.slice(elemIndx + 1)
                ],
                total: state.total - newElement.price
            }


        default:
            return state;
    }
}

export default reducer;