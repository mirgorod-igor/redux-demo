import { useParams } from 'react-router'
import { Provider, useSelector } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import PokemonByName from '../pokemonByName'
import { api } from '../api'
import Tabs from '../pokemonByName/Tabs'




// Can still subscribe to the store
//store.subscribe(() => store.getState())


// обвертка
/*const $ = {
    store: tabStore,
    use() {
        return useSelector(tabStore.getState).value
    },
    tab(value) {
        tabStore.dispatch(actions.selected(value))
    },
}*/





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