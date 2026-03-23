import { useGetPokemonQuery } from "../api"

import sty from './index.module.sass'




export default () => {
    const t = useGetPokemonQuery()
console.log('useGetPokemonQuery', t)

    return <ul className={sty.list}>{
        t.data?.results?.map((it, i) => <li key={i}><a href={'/'+it.name}>{it.name}</a></li>)
    }</ul>
}

