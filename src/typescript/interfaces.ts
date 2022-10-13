interface Trip {
  id: number;
  title: string;
  status: boolean;
  image: string;
  amount: number;
}

interface Stock {
  id: number;
  amount: number;
}

interface Action {
  type: string;
  trip: Trip;
  tripId?: number
  amount?: number;
}

export type { Trip, Action, Stock }