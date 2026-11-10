import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({

    name: "auth",
    initialState:{
        user: null,
        isAuthenticated : false,
        isloading:false
    },
    reducers:{
        addUser:(state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = true
            // state.isloading = false
             
        },
        deleteUser : (state, action)=>{
            state.user = null
            state.isAuthenticated = false
            // state.isloading = true
        }
    }
    
})



export const {addUser, deleteUser}= authSlice.actions

export default authSlice.reducer