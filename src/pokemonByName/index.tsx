import { Fragment } from 'react/jsx-runtime'

import { useGetPokemonByNameQuery } from '../api'
import Tabs from './Tabs'

import sty from './index.module.sass'




const tabs: { key: keyof Pokemon, name: string}[] = [
    { key: 'abilities', name: 'Возможности' },
    { key: 'past_stats', name: 'Прошлая статистика' }
]


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
        <h1>{t.data.name}</h1>
        <Tabs items={tabs}>{
            activeTab => activeTab == 'abilities'
                ? <AbilityTabContent items={t.data.abilities} />
                : <PastStatTabContent past_stats={t.data.past_stats} />
        }</Tabs>
    </div>
    : <span className={t.status}></span>
}




function AbilityTabContent(p: {
    items: Ability[]
}) {
    return <div className={sty.grid_two_cols}>
        <hr />
        {
            p.items.map((it, i) =>
                <Fragment key={i}>
                    <small>Название</small>
                    <A {...it.ability} />
                    <small>Скрыто</small>
                    <span>{it.is_hidden ? 'да' : ''}</span>
                    <hr />
                </Fragment>
            )
        }
        
    </div>
}

function PastStatTabContent(p: {
    past_stats: PastStat[]
}) {
    return <div className={sty.grid_two_cols}>
        <hr />
        {
            p.past_stats?.map((it, i) =>
                <Fragment key={i}>
                    <small>Генерация</small>
                    <a href={it.generation.url.substring(it.generation.url.indexOf('/generation'))}>{it.generation.name}</a>
                    <small className={sty.col_span_1to3}>Статистика</small>
                    <div className={sty.stat}>
                        {
                            it.stats.map((it, i) =>
                                <Fragment key={i}>
                                    <small>База</small>
                                    <span>{it.base_stat}</span>
                                    <small>Название</small>
                                    <A {...it.stat} />
                                </Fragment>
                            )
                        }
                    </div>
                    <hr />
                </Fragment>
            )
        }
    </div>
}

