import { combineReducers } from "redux";

import counter from "./counter";
import user from "./user";
import product from "./product";
import event from "./event";
import booking from "./booking";

export default combineReducers({
  counter,
  user,
  product,
  event,
  booking,
});
