import { createSlice } from "@reduxjs/toolkit";


const initialLogValue = {isLogged : false};
const buttonSlice = createSlice({
    name: 'Button Slice',
    initialState : initialLogValue,
    reducers : {
        login(state){
            state.isLogged = true;
        },
        logout(state){
            state.isLogged = false;
        }

    }

})

export default buttonSlice.reducer;
export const buttonActions = buttonSlice.actions;