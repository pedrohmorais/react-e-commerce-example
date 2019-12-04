import { actionTypes } from './reducers';
// ACTIONS
export const resetFilters = () => {
  return { type: actionTypes.RESET, light: false, ts: Date.now() }
}
export const updateFilters = (filters) => {
  return { type: actionTypes.UPDATE, filters }
}
