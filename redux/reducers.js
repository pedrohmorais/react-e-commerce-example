import { combineReducers } from 'redux';

import { reducer as reduxtestReducer } from '../pages/reduxtest/reducers';
import { reducer as shopCartReducer } from '../src/components/ShopCart/reducers';

const rootReducer = combineReducers({
  reduxtestReducer,
  shopCartReducer,
});

export default rootReducer;
