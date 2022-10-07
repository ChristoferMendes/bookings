import produce from "immer";
import type { Trip } from "../../../pages/Home";

interface Action {
  type: string;
  trip: Trip;
  tripId?: number
}

type State = Trip[] | [];

const actions = {
  ADD_RESERVE(state: State, action: Action) {
    return produce<Trip[]>(state, draft => {

      const tripIndex = draft.findIndex(trip => trip.id === action.trip?.id);

      if (tripIndex >= 0) {
        draft[tripIndex].amount += 1;
      } else {
        draft.push({
          ...action.trip,
          amount: 1,
        });
      }
    })
  },
  REMOVE_RESERVE(state: State, action: Action) {
    return produce(state, draft => {

      const tripIndex = draft.findIndex(trip => trip.id === action.tripId);

      if (tripIndex >= 0) {
        draft.splice(tripIndex, 1);
      }
    })
  }
}


export default function booking(state = [], action: Action) {

  const stateWillEvolve = actions[action.type as keyof typeof actions];

  return stateWillEvolve ? stateWillEvolve(state, action) : state;
}