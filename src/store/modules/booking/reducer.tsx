import type { Trip } from "../../../pages/Home";

interface Action {
  type: string;
  trip: Trip
}

type State = Trip[] | []


export default function booking(state = [], action: Action){
  const actions = {
    ADD_RESERVE(state: State, action: Action) {
      console.log(state);
      return [...state, {
        ...action.trip,
        amount: 1,
      }];
    }
  }

  const stateWillEvolve = actions[action.type as keyof typeof actions];

  return stateWillEvolve ? stateWillEvolve(state, action) : state;
}