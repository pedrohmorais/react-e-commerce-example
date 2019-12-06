import ShopCartService from '../../services/ShopCart';

const exampleInitialState = {
  items: [],
};

export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM_SHOP_CART',
  RESET: 'RESET_SHOP_CART',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      ShopCartService.setShopCart({ items: state.items.concat(action.item) });
      return {
        ...state,
        items: state.items.concat(action.item),
      };
    case actionTypes.RESET:
      return {
        items: exampleInitialState.items,
      };
    default:
      return state;
  }
};
