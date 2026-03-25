import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const api = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (build) => ({
        getPokemon: build.query<Paged<pokemon.Item>, void>({
            query: () => `pokemon`,
        }),
        getPokemonByName: build.query<Pokemon, string>({
            query: (name) => `pokemon/${name}`,
        }),
        ability: build.query<Stat, number>({
            query: (id) => `stat/${id}`,
        }),
        stat: build.query<Stat, number>({
            query: (id) => `stat/${id}`,
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonQuery,
  useGetPokemonByNameQuery
} = api