import { actionTypes } from './reducers';
// ACTIONS
export const removeFromCart = itemId => ({ type: actionTypes.REMOVE, itemId });

export const addToCart = item => ({ type: actionTypes.ADD_ITEM, item });

export const getCartFromCookie = () => ({ type: actionTypes.GET_FROM_COOKIE });
