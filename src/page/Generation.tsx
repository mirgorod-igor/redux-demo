import { useParams } from 'react-router'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Generation from '../generation'
import { api } from '../api'



export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export default () => {
  const {id} = useParams()

    return <Provider store={store}>
        <Generation id={parseInt(id!)} />
    </Provider>
}