import { createRoutine } from 'redux-saga-routines';

import { GET_MENUS, UPDATE_MENU_PRICE } from './constants';

export const getMenus = createRoutine(GET_MENUS);
export const updateMenuPrice = createRoutine(UPDATE_MENU_PRICE);
