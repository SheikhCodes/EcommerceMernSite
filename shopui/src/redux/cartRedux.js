import {createSlice} from "@reduxjs/toolkit"

//At a product page when we do add to cart then we use the following logic.
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0, //indicates the number at cart icon
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity+=1;
            state.products.push(action.payload)
            state.total+=action.payload.price* action.payload.quantity;
        },
    },
});

export const {addProduct}=cartSlice.actions;
export default cartSlice.reducer;