import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { pokemonApi } from './services/pokemonApi'


import './index.css'


export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    // ... other reducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
