import { configureStore } from "@reduxjs/toolkit";

import bookingsReducers from './modules/booking/reducer'
import rootReducer from "./modules/rootReducer";

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch