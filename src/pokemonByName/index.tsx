import { useGetPokemonByNameQuery } from '../api'

import sty from './index.module.sass'


type Props = {
    name: string
}

export default (p: Props) => {
    const t = useGetPokemonByNameQuery<Data<Pokemon>>(p.name)
console.log('useGetPokemonByNameQuery', t)
    return <div className={sty.card}>{
        t.status == 'fulfilled'
            ? <span>{t.data.name}</span>
            : <span className={t.status}></span>
    }</div>
}

