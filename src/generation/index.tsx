import { Fragment } from 'react/jsx-runtime'
import { Link } from 'react-router'

import { useGenerationQuery } from '../api'

import * as ui from '../ui'

import sty from './index.module.sass'

import ArrowLeft from '../svg/arrow-left.svg?react'



const tabs: { key: keyof Generation, name: string}[] = [
    { key: 'abilities', name: 'Возможности' },
    { key: 'names', name: 'Имена' }
]

type Props = Id

export default (p: Props) => {
    const t = useGenerationQuery<Data<Generation>>(p.id)
console.log('useGenerationQuery', t)

    return t.status == 'fulfilled'
        ? <div className={sty.card}>
            <Link to='/' className={sty.goto_prev}><ArrowLeft />к списку</Link>
            <h1>{t.data.name}</h1>
            <ui.Tabs items={tabs} defaultActiveTab='abilities'>{
                activeTabId => activeTabId == 'names'
                    ? <ul className={sty.grid}>{
                        t.data?.names.map((it, i) =>
                            <Fragment key={i}>
                                <li><a href={it.language.url}>{it.language.name}</a></li>
                                <li>{it.name}</li>
                            </Fragment>
                        )
                    }</ul>
                    : null
            }</ui.Tabs>
        </div>
        : <span className={t.status}></span>
}

