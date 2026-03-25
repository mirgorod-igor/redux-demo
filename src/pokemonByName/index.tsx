import { Fragment } from 'react/jsx-runtime'
import { useGetPokemonByNameQuery } from '../api'

import sty from './index.module.sass'


type Props = {
    name: string
}

export default (p: Props) => {
    const t = useGetPokemonByNameQuery<Data<Pokemon>>(p.name)
console.log('useGetPokemonByNameQuery', t)
    return t.status == 'fulfilled'
        ? <div className={sty.card}>
            <span>Название</span>
            <span>{t.data.name}</span>
            <span>Возможности</span>
            <div className={sty.card}>
                <span>Название</span>
                <span>Скрыто</span>
                {
                    t.data.abilities.map((it, i) =>
                        <Fragment key={i}>
                            <span>{it.ability.name}</span>
                            <span>{it.is_hidden ? 'да' : ''}</span>
                        </Fragment>
                    )
                }
            </div>
            <span>Прошлая статистика</span>
            <div className={sty.card}>
                <span>Генерация</span>
                <span>Статистика</span>
                {
                    t.data.past_stats?.map((it, i) =>
                        <Fragment key={i}>
                            <span>{it.generation.name}</span>
                            <span className={sty.card}>
                                <span>База</span>
                                <span>Название</span>
                                {
                                    it.stats.map((it, i) =>
                                        <Fragment key={i}>
                                            <span>{it.base_stat}</span>
                                            <a href={it.stat.url}>{it.stat.name}</a>
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

