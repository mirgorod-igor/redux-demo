import { Fragment } from 'react/jsx-runtime'
import { useGetPokemonByNameQuery } from '../api'

import sty from './index.module.sass'


function A(p: Base) {
    return <a href={p.url}>{p.name}</a>
}


type Props = {
    name: string
}


export default (p: Props) => {
    const t = useGetPokemonByNameQuery<Data<Pokemon>>(p.name)
console.log('useGetPokemonByNameQuery', t)
    return t.status == 'fulfilled'
        ? <div className={sty.card}>
            <small>Название</small>
            <span>{t.data.name}</span>
            <small>Возможности</small>
            <div className={sty.card}>
                <small>Название</small>
                <small>Скрыто</small>
                {
                    t.data.abilities.map((it, i) =>
                        <Fragment key={i}>
                            <A {...it.ability} />
                            <span>{it.is_hidden ? 'да' : ''}</span>
                        </Fragment>
                    )
                }
            </div>
            <small>Прошлая статистика</small>
            <div className={sty.card}>
                <small>Генерация</small>
                <small>Статистика</small>
                {
                    t.data.past_stats?.map((it, i) =>
                        <Fragment key={i}>
                            <A {...it.generation} />
                            <span className={sty.card}>
                                <small>База</small>
                                <small>Название</small>
                                {
                                    it.stats.map((it, i) =>
                                        <Fragment key={i}>
                                            <span>{it.base_stat}</span>
                                            <A {...it.stat} />
                                        </Fragment>
                                    )
                                }
                            </span>
                        </Fragment>
                    )
                }
            </div>
        </div>
        : <span className={t.status}></span>
}

