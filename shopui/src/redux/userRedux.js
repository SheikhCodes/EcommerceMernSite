import {createSlice} from "@reduxjs/toolkit"

//At a product page when we do add to cart then we use the following logic.
const userSlice=createSlice({
    name:"user",
    initialState:{
      currentUser:null,
      isFetching:false,
      error:false
    },
    reducers:{
       loginStart:(state)=>{
        state.isFetching=true
       },
       loginSuccess:(state,action)=>{
        state.isFetching=false;
        state.currentUser=action.payload
       },
       loginFailure:(state)=>{
        state.isFetching=false;
        state.error=true;
       },
    },
});

export const {loginStart,loginSuccess,loginFailure}=userSlice.actions;
export default userSlice.reducer;