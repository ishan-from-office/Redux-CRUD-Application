import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../redux/UserReducer';

const store =  configureStore({
    // reducer
    reducer:{
        users:UserReducer
        
        // add

        //update

        //delete

    },
    


    
})

export default store;
  