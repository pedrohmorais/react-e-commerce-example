
const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
};
  
  // REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light
      }
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case actionTypes.RESET:
      return {
        ...state,
        count: exampleInitialState.count
      }
    default:
      return state
  }
}
