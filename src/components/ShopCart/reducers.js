import ShopCartService from '../../services/ShopCart';

const exampleInitialState = {
  ...ShopCartService.getShopCart(),
};

export const actionTypes = {
  GET_FROM_COOKIE: 'GET_FROM_COOKIE_SHOP_CART',
  ADD_ITEM: 'ADD_ITEM_SHOP_CART',
  REMOVE: 'REMOVE_ITEM_SHOP_CART',
};

const removeCartItem = (items, itemIdToRemove) => {
  const newItems = items.filter(item => item.id !== itemIdToRemove);
  ShopCartService.setShopCart({
    items: newItems,
  });
  return newItems;
};

const addCartItem = (items, newItem) => {
  const newItems = ShopCartService.getShopCart().items;
  newItems.push(newItem);
  ShopCartService.setShopCart({
    items: newItems,
  });
  return newItems;
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        items: addCartItem(state.items, action.item),
      };
    case actionTypes.REMOVE:
      return {
        items: removeCartItem(state.items, action.itemId),
      };
    case actionTypes.GET_FROM_COOKIE:
      return {
        ...ShopCartService.getShopCart(),
      };
    default:
      return state;
  }
};
