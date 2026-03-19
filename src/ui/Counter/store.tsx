import { type ChangeEvent } from 'react'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        input: 0,
        positive: false,
    },
    reducers: {
        positive(state) {
            state.positive = true
        },
        setInput(state, action) {
            state.value = action.payload
        },
        incremented(state) {
            state.value += 1
        },
        decremented(state) {
            if(!state.positive || state.value)
                state.value -= 1
        }
    }
})

const { actions } = counterSlice

const store = configureStore({
    reducer: counterSlice.reducer
})

// Can still subscribe to the store
//store.subscribe(() => store.getState())


// обвертка
export default {
    store,
    use() {
        return useSelector(store.getState).value
    },
    positive() {
        store.dispatch(actions.positive())
    },
    changeEventHandler(e: ChangeEvent<HTMLInputElement>) {
        const v = parseInt(e.target.value)
        if(v >= 0) {
            e.target.value = v.toString()
            store.dispatch(actions.setInput(v))
        }
    },
    incremented() {
        store.dispatch(actions.incremented())
    },
    decremented() {
        store.dispatch(actions.decremented())
    },
}


