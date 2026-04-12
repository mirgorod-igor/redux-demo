import { Fragment } from 'react/jsx-runtime'
import { Link } from 'react-router'


import { useGetPokemonByNameQuery } from '../api'
import * as ui from '../ui'

import sty from './index.module.sass'

import ArrowLeft from '../svg/arrow-left.svg?react'



const tabs: { key: keyof Pokemon, name: string}[] = [
    { key: 'abilities', name: 'Возможности' },
    { key: 'sprites', name: 'Спрайты' },
    { key: 'past_stats', name: 'Прошлая статистика' },
    { key: 'stats', name: 'Статистика' },
    { key: 'types', name: 'Типы' },
]

const statsTabs: { key: keyof PastStat, name: string}[] = [
    { key: 'stats', name: 'Статистика' }
]


function A(p: NameUrl) {
    return <a href={p.url}>{p.name}</a>
}


type Props = {
    name: string
}


function Content(p: { data: Pokemon }) {
    return <div className={sty.card}>
        <Link to='/' className={sty.goto_prev}><ArrowLeft />к списку</Link>
        <h1>{p.data.name}</h1>
        <div className={sty.grid_two_cols}>
            <small>Вид</small>
            <Link to={p.data.species.url.substring(p.data.species.url.indexOf('/pokemon-species'))}>{p.data.species.name}</Link>
            <div className={sty.col_span_1to3}>&nbsp;</div>
        </div>
        <ui.Tabs items={tabs} defaultActiveTab='abilities'>{
            activeTab => activeTab == 'abilities'
                ? <AbilityTabContent items={p.data.abilities} />
                : activeTab == 'past_stats'
                    ? <PastStatsTabContent items={p.data.past_stats} />
                    : activeTab == 'stats' 
                        ? <StatsTabContent items={p.data.stats} />
                        : activeTab == 'sprites'
                            ? <SpritesTabContent {...p.data.sprites} />
                            : null
                
        }</ui.Tabs>
    </div>
}

export default (p: Props) => {
    const t = useGetPokemonByNameQuery<Data<Pokemon>>(p.name)
console.log('useGetPokemonByNameQuery', t)

return t.status == 'fulfilled'
    ? <Content data={t.data} />
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
                    <small>Слот</small>
                    <span>{it.slot}</span>
                    <hr />
                </Fragment>
            )
        }
        
    </div>
}


function SpritesTabContent(p: Sprites) {
    return <div className={sty.sprites}>
        <small>back</small>
        <img src={p.back_default} />
        <img src={p.back_shiny} />
        <img src={p.back_female!} />
        <img src={p.back_shiny_female!} />
        <small>front</small>
        <img src={p.front_default} />
        <img src={p.front_shiny} />
        <img src={p.front_female!} />
        <img src={p.front_shiny_female!} />
    </div>
}

function StatsTabContent(p: { items: StatItem[] }) {
    console.log(p.items)
    return <div className={sty.stat}>
        <hr />
        {
            p.items.map((it, i) =>
                <Fragment key={i}>
                    <small>Название</small>
                    <Link to={it.stat.url.substring(it.stat.url.indexOf('/stat'))}>{it.stat.name}</Link>
                    <small>База</small>
                    <span>{it.base_stat}</span>
                    <small>Усилие</small>
                    <span>{it.effort}</span>
                    <hr />
                </Fragment>
            )
        }
    </div>
}

function PastStatsTabContent(p: {
    items: PastStat[]
}) {
    return <div className={sty.grid_two_cols}>
        <hr />
        {
            p.items?.map((it, i) =>
                <Fragment key={i}>
                    <small>Генерация</small>
                    <Link to={it.generation.url.substring(it.generation.url.indexOf('/generation'))}>{it.generation.name}</Link>
                    <ui.Tabs items={statsTabs}>{
                        activeTab => activeTab == 'stats'
                            ? <StatsTabContent items={it.stats} />
                            : null
                    }</ui.Tabs>            
                    <hr />
                </Fragment>
            )
        }
    </div>
}

