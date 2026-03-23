import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'



const store = configureStore({
    name: 'usersApi',
    initialState: {
        loading
    },
    reducers: {

    }
})