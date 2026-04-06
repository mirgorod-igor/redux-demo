import { useParams } from 'react-router'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Stat from '../stat'
import { api } from '../api'




export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})



export default () => {
    const { id } = useParams()
console.log(id)
    return <Provider store={store}>
        <Stat id={parseInt(id!)} />
    </Provider>
}