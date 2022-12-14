import { all, call, put, takeLatest, select } from 'redux-saga/effects'
import { addBookingRequest, addBookingSuccess, updateAmountSuccess } from './actions'
import { api } from '../../../services/api'
import { AxiosResponse } from 'axios'
import { ActionTypes } from './types'
import { Trip } from '../../../typescript/interfaces'
// import { toast } from 'react-toastify'


interface Stock {
  id: number;
  amount: number;
}

type BookingSagas = ReturnType<typeof addBookingRequest>;
type UpdateAmountSagas = ReturnType<typeof updateAmountSuccess>

function* addToBooking({ id }: BookingSagas) {

  const selectCurrentTrip = (state: {booking: Trip[]}) => state.booking.find((trip) => trip.id === id);

  type CurrentTrip = ReturnType<typeof selectCurrentTrip>

  const tripExists: CurrentTrip = yield select(selectCurrentTrip);

  const myStock: AxiosResponse<Stock> = yield call(api.get, `/stock/${id}`)
  const stockAmount = myStock.data.amount;
  const currentStock = tripExists ? tripExists.amount : 0;
  const amount = currentStock + 1;

  if (amount > stockAmount) {
    alert('Maximum quantity');
    return;
  }
  
  if (tripExists) {

    yield put(updateAmountSuccess(id, amount))
  } else {
    const response: AxiosResponse<Trip> = yield call(api.get, `/trips/${id}`)

    const data = {
      ...response.data,
      amount: 1,
    }

    yield put(addBookingSuccess(data))
    
    const apiPost = () => {
     return api.post('/users_trips', {
      id: Math.floor(Math.random()),
      userId: 1,
      tripId: id,
    })}
    try {
      yield call(apiPost)
    } catch (error) {
      console.log(error);
    }
  }
}

function* updateAmount ({ tripId, amount }: UpdateAmountSagas) {
  if (amount <= 0) return;

  const myStock: AxiosResponse<any> = yield call(api.get, `/stock/${tripId}`)
  const stockAmount = myStock.data.amount;

  if (amount > stockAmount) {
    alert('Maximum quantity');
    return;
  }

  yield put(updateAmountSuccess(tripId, amount));
}

function* takeBooking() {
  yield all([
    takeLatest(ActionTypes.addReserveRequest, addToBooking),
    takeLatest(ActionTypes.updateTripAmountRequest, updateAmount),
  ])
}

export default takeBooking;
