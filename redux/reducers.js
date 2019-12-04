import { combineReducers } from 'redux';

import { reducer as reduxtestReducer } from '../pages/reduxtest/reducers';
import { reducer as fieldFilterReducer } from '../src/components/FieldFilter/reducers';

const rootReducer = combineReducers({
  reduxtestReducer,
  fieldFilterReducer,
});

export default rootReducer;
