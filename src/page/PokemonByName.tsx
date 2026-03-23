import { useParams } from 'react-router'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import PokemonByName from '../pokemonByName'
import { api } from '../api'



export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export default () => {
    const { name } = useParams()
console.log(name)
    return <Provider store={store}>
        <PokemonByName name={name!} />
    </Provider>
}