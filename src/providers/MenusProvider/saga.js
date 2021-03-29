import { takeLatest, put, call } from 'redux-saga/effects';

import request from 'utils/request';

import { getMenus, updateMenuPrice } from './actions';

export function* handleGetMenus() {
  const BASE_URL = '/api/menus';

  try {
    yield put(getMenus.request());

    const menus = yield call(request, BASE_URL);

    yield put(getMenus.success(menus));
  } catch (err) {
    yield put(getMenus.failure(err));
  } finally {
    yield put(getMenus.fulfill());
  }
}

export function* handleUpdateMenuPrice() {
  const BASE_URL = '/api/menus/2299b0f7-a836-49d9-8dc4-190b67f3cf2e';

  try {
    yield put(updateMenuPrice.request());

    const menus = yield call(request, BASE_URL, {
      body: JSON.stringify({
        uuid: '1222',
        price: 900,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    yield put(updateMenuPrice.success(menus));
  } catch (err) {
    yield put(updateMenuPrice.failure(err));
  } finally {
    yield put(updateMenuPrice.fulfill());
  }
}

export default function* menusProviderSaga() {
  yield takeLatest(getMenus.TRIGGER, handleGetMenus);
  yield takeLatest(updateMenuPrice.TRIGGER, handleUpdateMenuPrice);
}
