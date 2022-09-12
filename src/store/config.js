import { combineReducers, createStore } from "redux";

import BookingTicketReducer from "./reducers/BookingTicketReducer";
export const rootReducers = combineReducers({
  BookingTicketReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
