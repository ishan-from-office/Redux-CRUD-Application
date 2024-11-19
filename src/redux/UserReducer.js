import { createSlice } from "@reduxjs/toolkit";
import  userList  from "../data";


export const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        

        // add
        addUser:(state,action)=>{
            console.log(action)
            state.push(action.payload)

        },

        //update
        updateUser:(state,action)=>{
            const {id,name,email}= action.payload;
            const newinput = state.find((user) => user.id == id);
            if(newinput){
                newinput.name = name;
                newinput.email = email;
            }
         
           

        },

        //delete
        deleteUser:(state,action)=>{
            const {id} = action.payload;
            return state.filter((user) => user.id !== id);

        }

    }
})
export const {deleteUser,addUser,updateUser}= userSlice.actions;
export default userSlice.reducer;
