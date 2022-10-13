import produce from "immer";
import { Action, Trip } from "../../../typescript/interfaces";



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
  UPDATE_TRIP_AMOUNT_SUCCESS(state: State, action: Action) {
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