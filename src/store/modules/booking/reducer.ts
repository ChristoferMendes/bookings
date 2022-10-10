import produce from "immer";
import type { Trip } from "../../../pages/Home";

interface Action {
  type: string;
  trip: Trip;
  tripId?: number
  amount?: number;
}

type State = Trip[] | [];

const actions = {
  ADD_RESERVE_SUCCESS(state: State, action: Action) {
    return produce<Trip[]>(state, draft => {
      draft.push(action.trip);
    })
  },
  REMOVE_RESERVE(state: State, action: Action) {
    return produce(state, draft => {

      const tripIndex = draft.findIndex(trip => trip.id === action.tripId);

      if (tripIndex >= 0) {
        draft.splice(tripIndex, 1);
      }
    })
  },
  UPDATE_TRIP_AMOUNT(state: State, action: Action) {
    if (action.amount && action.amount <= 0) {
      return state;
    }
    return produce(state, draft => {
      const tripIndex = draft.findIndex(trip => trip.id === action.tripId);

      if(tripIndex >= 0) {
        draft[tripIndex].amount = Number(action.amount);
      }
    })
  }
}


export default function booking(state = [], action: Action) {

  const stateWillEvolve = actions[action.type as keyof typeof actions];

  return stateWillEvolve ? stateWillEvolve(state, action) : state;
}