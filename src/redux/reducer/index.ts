import { combineReducers } from 'redux';

import admin from './admin';
import application from './application';
import brand from './brand';
import product from './product';

export type RestDelete = {
  data: { n: number; ok: number; deletedCount: number };
  err: null | string;
  message: string;
  _id: string;
};

const rootReducer = combineReducers({
  admin,
  application,
  brand,
  product,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
