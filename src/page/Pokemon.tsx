import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Pokemon from '../pokemon'
import { api } from '../api'



export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // ... other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export default () => {

    return <Provider store={store}>
        <Pokemon />
    </Provider>
}