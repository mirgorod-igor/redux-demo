import { configureStore, createSlice } from "@reduxjs/toolkit"


type State = 'loading' | 'loaded' | 'idle' | 'failure'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    $st: 'idle' as State
  },
  reducers: {
    fetch: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.$st = 'loading'
      state.$st = 'loaded'
      state.$st = 'idle'
    }
  }
})


const  EP = 'users'

function load() {

}

//export default { users }