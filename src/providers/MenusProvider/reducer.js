import produce from 'immer';

import { getMenus, updateMenuPrice } from './actions';

export const initialState = {
  getMenus: {
    loading: false,
    fetched: false,
    error: null,
    menus: [],
  },

  updateMenuPrice: {
    loading: false,
    fetched: false,
    error: null,
    menu: {},
  },
};

const showcasesReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case getMenus.REQUEST:
        draft.getMenus = {
          ...initialState.getMenus,
          loading: true,
        };
        break;

      case getMenus.SUCCESS:
        draft.getMenus.loading = false;
        draft.getMenus.fetched = true;
        draft.getMenus.menus = payload;
        break;

      case getMenus.FAILURE:
        draft.getMenus.loading = false;
        draft.getMenus.fetched = false;
        draft.getMenus.error = payload;
        break;

      case updateMenuPrice.REQUEST:
        draft.updateMenuPrice.loading = true;
        break;

      case updateMenuPrice.SUCCESS:
        draft.updateMenuPrice.loading = false;
        draft.updateMenuPrice.fetched = true;
        draft.updateMenuPrice.menu = payload;
        break;

      case updateMenuPrice.FAILURE:
        draft.updateMenuPrice.loading = false;
        draft.updateMenuPrice.fetched = false;
        draft.updateMenuPrice.error = payload;
        break;
    }
  });

export default showcasesReducer;
