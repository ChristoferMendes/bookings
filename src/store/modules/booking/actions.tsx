import type { Trip } from "../../../pages/Home";

export function addBooking(trip: Trip) {
  return {
    type: 'ADD_RESERVE',
    trip,
  }
}

export function removeBooking(id: number) {
  return {
    type: 'REMOVE_RESERVE',
    tripId: id,
  }
}

export function updateAmount(id: number, amount: number) {
  return {
    type: 'UPDATE_TRIP_AMOUNT',
    tripId: id,
    amount: amount,
  }
}