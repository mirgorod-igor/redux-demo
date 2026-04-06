import { Fragment } from 'react/jsx-runtime'
import { Link } from 'react-router'


import { useGetPokemonByNameQuery } from '../api'
import * as ui from '../ui'

import sty from './index.module.sass'

import ArrowLeft from '../svg/arrow-left.svg?react'



const tabs: { key: keyof Pokemon, name: string}[] = [
    { key: 'abilities', name: 'Возможности' },
    { key: 'past_stats', name: 'Прошлая статистика' }
]

const statsTabs: { key: keyof PastStat, name: string}[] = [
    { key: 'stats', name: 'Статистика' }
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
        <Link to='/' className={sty.goto_prev}><ArrowLeft />к списку</Link>
        <h1>{t.data.name}</h1>
        <ui.Tabs items={tabs} defaultActiveTab='abilities'>{
            activeTab => activeTab == 'abilities'
                ? <AbilityTabContent items={t.data.abilities} />
                : <PastStatTabContent past_stats={t.data.past_stats} />
        }</ui.Tabs>
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


function Stats(p: { items: Stat[] }) {
    console.log(p.items)
    return <div className={sty.stat}>
        {
            p.items.map((it, i) =>
                <Fragment key={i}>
                    <small>Название</small>
                    <A {...it.stat} />
                    <small>База</small>
                    <span>{it.base_stat}</span>
                    <small>Усилие</small>
                    <span>{it.effort}</span>
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
                    <ui.Tabs items={statsTabs}>{
                        activeTab => activeTab == 'stats'
                            ? <Stats items={it.stats} />
                            : null
                    }</ui.Tabs>
                    
                    <hr />
                </Fragment>
            )
        }
    </div>
}

