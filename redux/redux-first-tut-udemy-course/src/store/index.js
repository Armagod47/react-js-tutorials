import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // Not mutating the state properties
    // Objects which are returned in reducers, will not be merged with existing state, it will overwrite existing state
    return {
      counter: state.counter + 1,
      // if show counter is not redefined, it wont show in dom
      // So we must always update other states as well, when we update any piece of state, because itoverwrites the old state
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    //NEVER MUTATE STATE
    //state.counter++; like these,instead return
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

// CreateStore wants a pointer to reducer as parameters
const store = createStore(counterReducer);

export default store;
