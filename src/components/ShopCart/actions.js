import { actionTypes } from './reducers';
// ACTIONS
export const resetFilters = () => ({ type: actionTypes.RESET, light: false, ts: Date.now() });

export const addToChart = item => ({ type: actionTypes.ADD_ITEM, item });
