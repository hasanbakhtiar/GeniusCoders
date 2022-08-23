import { createStore,combineReducers } from "redux";
import { blogReducer } from "../reducer/blogreducer";

// Store Start
export default () => {
  const store = createStore(
    combineReducers({
      actionreducer:blogReducer
    })
  );
  return store;
};
// Store End
