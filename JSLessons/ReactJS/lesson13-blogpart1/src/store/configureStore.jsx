import { createStore } from "redux";
import { blogReducer } from "../reducer/blogreducer";

// Store Start
export default () => {
  const store = createStore(blogReducer);
  return store;
};
// Store End
