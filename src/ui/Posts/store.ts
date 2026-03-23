import { configureStore, createSlice } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'



const counterSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [] as {}[]
    },
    reducers: {
        setValue(state, action) {
            state.value = action.payload
        }
    }
})

const store = configureStore({
    reducer: ,
    applyMiddleware(...middleware)
})
