//import api from './api'
import { useEffect } from 'react'
import * as ui from './ui/base'
import { useGetPokemonQuery } from './services/pokemonApi'


/*
export default () => {
  const st = api.use('users')
  <button disabled={st != 'idle'}  onClick={handler}></button>
}*/


function initEffect() {
    
}

function Pokemons() {
    const t = useGetPokemonQuery()

    return <ul>{
        t.data?.results?.map(it => <li><a href={it.url}>{it.name}</a></li>)
    }</ul>
}

export default () => {
    useEffect(initEffect, [])
    return <div>
        <ui.Counter positive />
        <ui.Counter positive />
        <ui.Picker options={['1','2','3']} onChange={_ => null} value={'0'} />
        <Pokemons />
    </div>
}