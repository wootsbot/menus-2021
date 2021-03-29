import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectMenusDomain = state => state.menusProvider || initialState;

const selectMenus = createSelector(selectMenusDomain, subState => subState.getMenus);

export { selectMenusDomain, selectMenus };
