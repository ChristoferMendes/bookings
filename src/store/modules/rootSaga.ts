import { all } from 'redux-saga/effects'

import booking, { BookingRequest } from './booking/sagas'
type a = () => any;

export default function* rootSaga (): Generator<a> {
  return yield all([booking])
}