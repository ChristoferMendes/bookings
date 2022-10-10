import { all, fork } from 'redux-saga/effects'
import takeBooking from './booking/sagas'

export default function* rootSaga () {
  yield all([fork(takeBooking)])
}