import { createSlice } from "@reduxjs/toolkit";


const initialCounterValue = {counter: 0};

const counterSlice = createSlice({
    name:"Counter Slice",
    initialState : initialCounterValue,
	//map of all the objects
    reducers:{
		//these methods automatically receives latest state
        increase(state){
			//State mutation can be used in redux/toolkit
			//because in background redux toolkit has hidden tool 'emer'
			//which will automatically clone existing state, create new state object,keep all the state which we are not editing and overwrite the state which we are editing.
            state.counter++;
        },
        increaseByParams(state, action){
            state.counter = state.counter + action.payload;
        },
        clearState(state){
            state.counter = 0;
        }
    }
})

// Exporting all the reducers, by which we gain access to all the reducers inside counterSlice
export default counterSlice.reducer;

// Exporting all the reducer functions i.e increase, clearState etc...
export const counterActions = counterSlice.actions;