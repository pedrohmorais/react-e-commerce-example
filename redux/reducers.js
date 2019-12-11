import { combineReducers } from 'redux';

import { reducer as shopCartReducer } from '../src/components/ShopCart/reducers';

const rootReducer = combineReducers({
  shopCartReducer,
});

export default rootReducer;
