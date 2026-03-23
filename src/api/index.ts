import { createSlice } from "@reduxjs/toolkit"


type State = 'loading' | 'loaded' | 'idle' | 'failure'

const fetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        ST: 'idle' as State,
        value: undefined as any
    },
    reducers: {
        loading(state) {
            state.ST = 'loading'
        },
        loaded(state, action) {
            state.ST = 'loaded'
            state.value = action.payload
        },
        failure(state, action) {
            state.ST = 'failure'
            state.value = action.payload
        }
    }
})


const  EP = 'users'

function load() {

}

//export default { users }