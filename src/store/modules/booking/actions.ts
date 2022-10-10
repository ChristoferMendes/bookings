import type { Trip } from "../../../pages/Home";

export function addBookingRequest(id: Trip['id']) {
  return {
    type: 'ADD_RESERVE_REQUEST',
    id,
  }
}

export function addBookingSuccess(trip: Trip) {
  return {
    type: 'ADD_RESERVE_SUCCESS',
    trip,
  }
}

export function removeBooking(id: number) {
  return {
    type: 'REMOVE_RESERVE',
    tripId: id,
  }
}

export function updateAmount(id: Trip['id'], amount: Trip['amount']) {
  return {
    type: 'UPDATE_TRIP_AMOUNT',
    tripId: id,
    amount: amount,
  }
}