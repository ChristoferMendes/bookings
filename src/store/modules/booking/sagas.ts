import { all, call, put, takeLatest } from 'redux-saga/effects'
import { addBookingRequest, addBookingSuccess } from './actions'
import { api } from '../../../services/api'
import { Trip } from '../../../pages/Home'
import { RootState } from '../..'
import { AxiosResponse } from 'axios'
import { ActionTypes } from './types'

// export interface BookingRequest {
//   id: ReturnType<typeof addBookingRequest>;
//   type: string;
// }

type BookingSagas = ReturnType<typeof addBookingRequest>;

function* addToBooking({ id }: BookingSagas) {

  const response: AxiosResponse<Trip> = yield call(api.get, `/trips/${id}`)


  yield put(addBookingSuccess(response.data))
}

function* takeBooking() {
  yield all([
    takeLatest(ActionTypes.addReserveRequest, addToBooking)
  ])
}

export default takeBooking;
