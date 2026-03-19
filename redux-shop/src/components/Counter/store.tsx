import { type ChangeEvent } from 'react'
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    input: 0
  },
  reducers: {
    input(state, input) {
        console.log('d='+input.payload)
        state.value = input.payload
    },
    incremented(state) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented(state) {
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



export default {
    $: store,
    use() {
        return useSelector(store.getState).value
    },
    changeEventHandler(e: ChangeEvent<HTMLInputElement>) {
        const v = parseInt(e.target.value)
        if(!isNaN(v)) {
            e.target.value = v.toString()
            store.dispatch(actions.input(v))
        }
    },
    incremented() {
        store.dispatch(actions.incremented())
    },
    decremented() {
        store.dispatch(actions.decremented())
    },
}


