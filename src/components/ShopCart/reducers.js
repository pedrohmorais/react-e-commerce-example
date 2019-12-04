const exampleInitialState = {
  items: [],
};

export const actionTypes = {
  UPDATE: 'UPDATE_FIELD_FILTERS',
  RESET: 'RESET_FIELD_FILTERS',
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE:
      return {
        ...state,
        items: action.items,
      }
    case actionTypes.RESET:
      return {
        items: exampleInitialState.items,
      }
    default:
      return state;
  }
}
