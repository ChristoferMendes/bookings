import { Trip } from "../../../typescript/interfaces";
import { ActionTypes } from "./types";

export function addBookingRequest(id: Trip['id']) {
  return {
    type: ActionTypes.addReserveRequest,
    id,
  }
}

export function addBookingSuccess(trip: Trip) {
  return {
    type: ActionTypes.addReserveSuccess,
    trip,
  }
}

export function removeReserve(id: number) {
  return {
    type: ActionTypes.removeReserve,
    tripId: id,
  }
}

export function updateAmountRequest(id: Trip['id'], amount: Trip['amount']) {
  return {
    type: ActionTypes.updateTripAmountRequest,
    tripId: id,
    amount,
  }
}

export function updateAmountSuccess(id: Trip['id'], amount: Trip['amount']) {
  return {
    type: ActionTypes.updateTripAmountSuccess,
    tripId: id,
    amount,
  }
}
