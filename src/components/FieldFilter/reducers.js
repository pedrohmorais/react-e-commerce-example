import constants from '../../constants';

const exampleInitialState = {
  filters: {
    fieldTypes: constants.FIELD_TYPES,
    estado: null,
    cidade: null,
  },
};

export const actionTypes = {
  UPDATE: 'UPDATE_FIELD_FILTERS',
  RESET: 'RESET_FIELD_FILTERS'
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE:
      return {
        ...state,
        filters: action.filters,
      }
    case actionTypes.RESET:
      return {
        filters: exampleInitialState.filters,
      }
    default:
      return state;
  }
}
