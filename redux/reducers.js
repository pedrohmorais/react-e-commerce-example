import { combineReducers } from 'redux';


// exemplo de pacote reducer
// const tracking = combineReducers({
//   events,
//   layers,
// });
// aqui sao combinados os pacotes de reducers

import { reducer as reduxtestReducer } from '../pages/reduxtest/reducers';
import { reducer as fieldFilterReducer } from '../src/components/FieldFilter/reducers';
const rootReducer = combineReducers({
  reduxtestReducer,
  fieldFilterReducer,
});

export default rootReducer;
