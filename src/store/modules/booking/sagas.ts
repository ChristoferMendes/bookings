import { all, call, put, takeLatest, select } from 'redux-saga/effects'
import { addBookingRequest, addBookingSuccess, updateAmount } from './actions'
import { api } from '../../../services/api'
import { Trip } from '../../../pages/Home'
import { AxiosResponse } from 'axios'
import { ActionTypes } from './types'
import { RootState } from '../..'

type BookingSagas = ReturnType<typeof addBookingRequest>;



function* addToBooking({ id }: BookingSagas) {

  const selectCurrentTrip = (state: {booking: Trip[]}) => state.booking.find((trip) => trip.id === id);
  type CurrentTrip = ReturnType<typeof selectCurrentTrip>

  const tripExists: CurrentTrip = yield select(selectCurrentTrip);

  if (tripExists) {
    const amount = tripExists.amount + 1;

    yield put(updateAmount(id, amount))
  } else {
    const response: AxiosResponse<Trip> = yield call(api.get, `/trips/${id}`)

    const data = {
      ...response.data,
      amount: 1,
    }
    yield put(addBookingSuccess(data))
  }
}

function* takeBooking() {
  yield all([
    takeLatest(ActionTypes.addReserveRequest, addToBooking)
  ])
}

export default takeBooking;
